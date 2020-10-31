const { instance } = require('../axios/instance');

const getItemsBySearch = async (query) => {
  const response = await instance.get(`/sites/MLA/search?q=${query}`);
  return response.data;
};

const getItemById = async (itemId) => {
  const response = await instance.get(`/items/${itemId}`);
  return response.data;
};

const getItemDescriptionById = async (itemId) => {
  const response = await instance.get(`/items/${itemId}/description`);
  return response.data;
};

module.exports = {
  getItemsBySearch,
  getItemById,
  getItemDescriptionById,
};
