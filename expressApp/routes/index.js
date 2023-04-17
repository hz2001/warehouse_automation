const express = require('express');
const path = require('path');
// var router = express.Router();
require('dotenv').config()

TOKEN_getItems = process.env.getItem_api_key
const app = express();
const buildPath = path.join(__dirname, '../client/build');


app.use(express.static(buildPath));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(buildPath, 'index.html'));
// });

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = app;
