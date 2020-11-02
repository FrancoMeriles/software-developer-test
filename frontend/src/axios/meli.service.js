const axios = require('axios');

const basePath = 'http://localhost:4000/api';

export const getItemsBySearch = async (query) => {
  const response = await axios.get(`${basePath}/items?q=${query}`);
  return response.data;
};

export const getItemById = async (itemId) => {
  const response = await axios.get(`${basePath}/items/${itemId}`);
  return response.data;
};
