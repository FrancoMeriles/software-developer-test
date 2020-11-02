# Frontend

This Project is a webapp using [React](https://es.reactjs.org/) and [Create React App](https://github.com/facebook/create-react-app) for a evaluation, it consume the server created in the backend folder

### Structure

```
└── cypress
│   └── fixtures
│   └── integration
│   └── plugins
│   └── support
└── src
│   └── assets
│   └── axios
│   └── components
│   └── containers
│   └── scss
│   └── ui
│   └── util
└── .gitignore
└── .eslintrc.json
└── cypress.json
└── package.json
└── yarn-lock.json
└── README.MD
```

### How to try it

- Clone this repo and install all dependencies

```sh
yarn
```

- Run the backend project.

```sh
cd .. && cd backend/ && npm start
```

- And then run this project.

```sh
cd .. && cd frontend/ && yarn start
```

### Run

Open the proyect in your localhost port `3000`

### Linter

In this project i used [eslint](https://eslint.org/) with the specification of [Airbnb](https://github.com/airbnb/javascript), you can run the linter with the following command

```sh
npm run lint
```

### Unit Testing

In this project i used [Jest](https://jestjs.io/) for testing, you can run this tests with the following command

Run unit test

```sh
npm run test
```

### e2e Test

In this project i used [Cypress](https://jestjs.io/) for e2e testing, you can run this tests with the following command

First start the app and in other console run cypress

```sh
yarn start
```

```sh
npm run cypress
```

Click in the `app.spect.js` to start running the tests

### Thanks 🙌

- Franco Meriles
