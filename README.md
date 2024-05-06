# Warehouse Automation Front End + Auto Deployment

This branch is for Azure web app deployment. By wrapping an Express app around the React app build folder, I can successfully deploy the app onto Azure Web App.

The CD/CI workflow is specified in the [workflow folder](.github/workflows), and the app only redeploys when the information in the ./expressApp folder changes. 

In the [./expressApp/routes](expressApp/routes) folder, img.js contains the working feature of this project; the client folder, which correlates to the root route.
