![Continuous Integration](https://github.com/johndaudelin/hadshot-tovot/actions/workflows/ci.yml/badge.svg)

# חדשות טובות

This is an informational website with good news in Russian, Hebrew, and English.

## Architecture overview

The static assets of this Single Page Application (SPA) will be deployed in an Amazon S3 bucket exposed through a dedicated Amazon CloudFront distribution. This distribution is configured (using a Custom Error Page) to redirect all HTTP 403 requests (unauthorized) to the main resource (index.html). This configuration allows the user to be redirected to the main page if he enters an invalid URL.

## Local Setup

In the project directory, run the following command to install all modules:
`npm install`

To start the application locally and access it on your browser (http://localhost:3000), run the following command:
`yarn dev`

## Deploying to AWS

In order to deploy to AWS, you have to take the following steps:

1. Deploy the CloudFormation Template from the project (`hadshot-tovot-stack.yaml`) using AWS CLI or AWS Console
2. Once your stack is deployed, from the "Output" tab, identify the S3 "Bucket" name
3. Build the app (using `yarn build`) for distribution
4. Upload the content of the `out` folder into the S3 bucket identified at step 2 (Upload also the '\_next' subdirectory)
5. Access the application through the CloudFront distribution domain identified on the CloudFormation output value named "SPADomain"

## Available Scripts

In the project directory, you can run:

`yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`yarn build`

Builds the app for production to the `out` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is ready to be deployed.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
