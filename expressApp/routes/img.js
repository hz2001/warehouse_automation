if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}-09

const {
  BlobServiceClient,
  StorageSharedKeyCredential,
  newPipeline
} = require('@azure/storage-blob');

// const fetch = require('node-fetch');
const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));
const express = require('express');
const router = express.Router();
const containerName1 = 'image-uploads';
const multer = require('multer');
const inMemoryStorage = multer.memoryStorage();
const uploadStrategy = multer({ storage: inMemoryStorage }).single('image');
const containerName2 = 'image-uploads';
const ONE_MEGABYTE = 1024 * 1024;
const uploadOptions = { bufferSize: 4 * ONE_MEGABYTE, maxBuffers: 20 };
const ONE_MINUTE = 60 * 1000;

const sharedKeyCredential = new StorageSharedKeyCredential(
  process.env.AZURE_STORAGE_ACCOUNT_NAME,
  process.env.AZURE_STORAGE_ACCOUNT_ACCESS_KEY);
const pipeline = newPipeline(sharedKeyCredential);

const blobServiceClient = new BlobServiceClient(
  `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net`,
  pipeline
);

const getBlobName = originalName => {
  // Use a random number to generate a unique file name,
  // removing "0." from the start of the string.
  const identifier = Math.random().toString().replace(/0\./, '');
  return `${identifier}-${originalName}`;
};

router.get('/', async (req, res, next) => {

  let viewData;

  try {
    const containerClient = blobServiceClient.getContainerClient(containerName1);
    const listBlobsResponse = await containerClient.listBlobFlatSegment();
    console.log(listBlobsResponse.segment.blobItems)
    for await (const blob of listBlobsResponse.segment.blobItems) {
      console.log(`Blob: ${blob.name}`);
    }

    viewData = {
      title: 'Home',
      viewName: 'index',
      accountName: process.env.AZURE_STORAGE_ACCOUNT_NAME,
      containerName: containerName1
    };

    if (listBlobsResponse.segment.blobItems.length) {
      viewData.thumbnails = listBlobsResponse.segment.blobItems;
    }
  } catch (err) {
    viewData = {
      title: 'Error',
      viewName: 'error',
      message: 'There was an error contacting the blob storage container.',
      error: err
    };
    res.status(500);
  } finally {
    res.render(viewData.viewName, viewData);
  }
});

router.post('/', uploadStrategy, async (req, res) => {
  const blobName = getBlobName(req.file.originalname);
  const stream = () => import('into-stream')
        .then(({default: intoStream}) => intoStream(req.file.buffer)); // dynamic import intoStream
  const containerClient = blobServiceClient.getContainerClient(containerName2);;
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  // generate query for the httpTrigger (what we have to pass in into the queue)
  const blobFixed = blobName.replaceAll(" ", "%20");
  const image_upload_url = "https://assignment5storage1.blob.core.windows.net/image-uploads/" + blobFixed;
  const complete_url = "http://127.0.0.1:7071/api/ass5httpTrigger?image_upload_url="+image_upload_url; // for local testing, need to change for containers

  try {
    await blockBlobClient.uploadStream(await stream(),
      uploadOptions.bufferSize, uploadOptions.maxBuffers,
      { blobHTTPHeaders: { blobContentType: "image/jpeg" } });

    // call the http trigger to upload the the address to queue
    await fetch(complete_url); // sync with function app QUEUEFUNCTIONAPP -> ass5httpTrigger
    res.render('success', { message: 'File uploaded to Azure Blob storage.', status: 'queue updated along with blob.', blob: complete_url});

  } catch (err) {
    console.log("sth went wrong, fetch")
    res.render('error', { message: complete_url+ ' \n'+ err.message});
  }
});

module.exports = router;