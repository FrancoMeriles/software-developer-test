const axios = require('axios');

exports.instance = axios.create({
  baseURL: 'https://api.mercadolibre.com/',
});
