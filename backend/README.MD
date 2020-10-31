# Backend

This Project is a service using nodeJS, ExpressJS and the api from [Mercado Libre](https://api.mercadolibre.com/sites/MLA) for a evaluation

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
npm install
```

- Run this project.

```sh
npm start
```

### Run

Open the proyect in your localhost port `4000`

### Routes

| Name   | URL                   | Response             |
| ------ | --------------------- | -------------------- |
| item   | `/api/items/:id`      | Singular item        |
| search | `/api/items?q=:query` | Search results items |

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

### Swagger

To see the swagger, install [Swagger Viewer](https://marketplace.visualstudio.com/items?itemName=Arjun.swagger-viewer) in your [Visual Studio Code](https://code.visualstudio.com/)

- Open the command pallet with <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>p</kbd> and type `Preview Swagger`
- Or navigate to this [site](https://editor.swagger.io/) and paste the `docs/swagger.yml` in the editor

### Dependency check

In this project i used [dependency-check](https://www.npmjs.com/package/dependency-check) for checking which modules i have used in my code and then makes sure they are listed as dependencies in the package.json, or vice-versa

Run dependency-check

```sh
npm run dependency-check
```

### Thanks 🙌
