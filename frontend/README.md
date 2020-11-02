# Frontend

This Project is a webapp using [React](https://es.reactjs.org/) and [Create React App](https://github.com/facebook/create-react-app) for a evaluation, it consume the server created in the backend folder

### Structure

```
└── docs
│   └── swagger.yml
└── src
│   └── application
│   │   └── controllers
│   │   │   └── items.controller.js
│   │   └── routes
│   │   │   └── items.route.js
│   │   │   └── index.js
│   │   └── dictionaries
│   │   │   └── dictionary.errors.json
│   │   └── app.js
│   └── infrastructure
│   │   └── axios
│   │      └── instance.js
│   │   └── service
│   │      └── items.service.js
│   └── util
│   │   └── getPrice.js
│   └── index.js
└── test
│   └── integration
│   │   └── data
│   │   │   └── itemSuccess.json
│   │   │   └── querySuccess.json
│   │   └── stub
│   │   │   └── getItemData.json
│   │   │   └── getItemDescription.json
│   │   │   └── getQuery.json
│   │   └── items.test.js
│   └── unit
│   │   └── getPrice.test.js
└── .gitignore
└── .eslintrc.json
└── package.json
└── package-lock.json
└── README.MD
```

### How to try it

- Clone this repo and install all dependencies

```sh
yarn
```

- Run this project.

```sh
yarn start
```

### Run

Open the proyect in your localhost port `3000`

### Linter

In this project i used [eslint](https://eslint.org/) with the specification of [Airbnb](https://github.com/airbnb/javascript), you can run the linter with the following command

```sh
npm run lint
```

### Testing

In this project i used [Jest](https://jestjs.io/) for testing, you can run this tests with the following command

Run unit test

```sh
npm run test
```

Run integration test

```sh
npm run integration-test
```

### Dependency check

In this project i used [dependency-check](https://www.npmjs.com/package/dependency-check) for checking which modules i have used in my code and then makes sure they are listed as dependencies in the package.json, or vice-versa

Run dependency-check

```sh
npm run dependency-check
```

### Thanks 🙌
