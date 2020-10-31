# Backend

This Project is a service using nodeJS, ExpressJS and the api from [Mercado Libre](https://api.mercadolibre.com/sites/MLA) for a evaluation

### Structure

```
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

```sh
npm run test
```

### Swagger

To see the project with swagger, install [Swagger Viewer](https://marketplace.visualstudio.com/items?itemName=Arjun.swagger-viewer) in your [Visual Studio Code](https://code.visualstudio.com/)

- Open the command pallet with <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>p</kbd> and type `Preview Swagger`
- Or navigate to this [site](https://editor.swagger.io/) and paste the `docs/swagger.yml` in the editor

### Thanks 🙌
