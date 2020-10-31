const axios = require('axios');

const basePath = 'https://api.mercadolibre.com';

const getItemsBySearch = async (query) => {
  const response = await axios.get(`${basePath}/sites/MLA/search?q=${query}`);
  return response.data;
};

const getItemById = async (itemId) => {
  const response = await axios.get(`${basePath}/items/${itemId}`);
  return response.data;
};

const getItemDescriptionById = async (itemId) => {
  const response = await axios.get(`${basePath}/items/${itemId}/description`);
  return response.data;
};

module.exports = {
  getItemsBySearch,
  getItemById,
  getItemDescriptionById,
};
