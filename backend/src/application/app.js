const express = require('express');
const cors = require('cors');

const app = express();

// settings
app.set('port', 4000);
app.set('base_url', '/api');

// middlewares
app.use(cors());
app.use(express.json());

// route
app.use(`${app.get('base_url')}`, require('./routes'));

// catch invalid routes
app.use('*', (req, res) => res.send({ error: 'invalid route' }));

module.exports = app;
