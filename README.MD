# Software Developer Test - Meli

Hi ! Wellcome to my Software Developer test evaluation.

### Structure

The project has two folders, one where the backend is located and the other the front end, they work independently of each other so to start the projects we must navigate to each one and install the necessary dependencies

```
└── backend
└── frontend
└── README.MD
```

### How to try it locally

- IMPORTANT ! To test the front end you need to start de backend.

- Navigate to the backend (BFF) folder, install and start

```sh
npm install
```

```sh
npm start
```

- Navigate to the frontend folder, install and start the app

```sh
yarn
```

```sh
yarn start
```

Each folder has its specific readme with more instructions

### Deploy the projects to AWS

The projects are ready to deploy to AWS ! 🌈

You can deploy the project with [Serverless Framework](https://www.serverless.com/) using [Serverless Componentes](https://www.serverless.com/components/), you will need have an account with the correct credentials (API and SECRET KEY) in the file `~/.aws/credentials`

Then install the latest version of Serverless that supports components

```sh
npm install -g serverless
```

#### Backend

Navigate to the backend folder and deploy 🎉

```sh
serverless deploy
```

In the console you will have a simial result

```sh
serverless ⚡framework
Action: "deploy" - Stage: "dev" - Name: "express-app"

apiGatewayUrl: https://ikmhx2cjxc.execute-api.us-east-1.amazonaws.com
url:           https://ikmhx2cjxc.execute-api.us-east-1.amazonaws.com

Full details: https://app.serverless.com/francomeriles/apps/express-app/express-app/dev
```

Copy the apiGatewayUrl and update the base `basePath` in the front end `frontend/src/axios/meli.service.js`

Then deploy the frontend 🎉

```sh
serverless deploy
```

In the console you will have a simial result

```sh
serverless ⚡framework
Action: "deploy" - Stage: "dev" - Name: "react-app"

bucket:          website-f30jov6
distributionUrl: https://d3j5d3b676gt30.cloudfront.net
bucketUrl:       http://website-f30jov6.s3-website.us-east-1.amazonaws.com
url:             https://d3j5d3b676gt30.cloudfront.net

Full details: https://app.serverless.com/francomeriles/apps/react-app/react-app/dev
```

Visit the site using the bucketUrl

### Thanks 🙌

- Franco Meriles
