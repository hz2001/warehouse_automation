# DS519Ass4 + 5 front end + auto deployment

This branch is for azure web app deployment. By wrapping an Express app around the React app build folder, I am able to sucessfully deploy the app onto Azure Web App.

The CD/CI workflow is specified in the [workflow folder](.github/workflows), and the app only redeploy when the information in the ./expressApp folder changes. 

In the [./expressApp/routes](expressApp/routes) folder, img.js contains the working feature of Assignment 5; the client folder, which correlates to the root route, is the features from Assignment 4.
