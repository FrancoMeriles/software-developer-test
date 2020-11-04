const itemsService = require('../../infrastructure/service/items.service');
const dictionaryError = require('../dictionaries/dictionary.errors.json');
const getPrices = require('../../util/getPrice');

const itemsCtrl = {};

const author = {
  name: 'Franco',
  lastname: 'Meriles',
};

itemsCtrl.getItemsBySearch = async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ ...dictionaryError.bad_request });
  }
  let data;
  try {
    data = await itemsService.getItemsBySearch(query);
  } catch (error) {
    res.status(500).json({ ...dictionaryError.internal_server_error });
  }
  // Get categories
  let categories = [];
  if (data.filters.length) {
    const filtersCategories = data.filters.find((filter) => filter.id === 'category');
    categories = filtersCategories.values.map((categorie) => categorie.name);
  }

  let items = [];
  if (data.results) {
    // Get items
    items = data.results.slice(0, 4).map((item) => {
      const { entire, decimal } = getPrices(item.price);
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: entire,
          decimals: decimal,
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
      };
    });
  }

  res.status(200).json({ author, categories, items });
};

itemsCtrl.getItemById = async (req, res) => {
  const itemId = req.params.id;
  if (!itemId) {
    return res.status(400).json({ ...dictionaryError.bad_request });
  }
  let data;
  try {
    data = await Promise.all([
      itemsService.getItemById(itemId),
      itemsService.getItemDescriptionById(itemId),
    ]);
  } catch (error) {
    res.status(500).json({ ...dictionaryError.internal_server_error });
  }
  const [itemData, itemDescription] = data;
  const { entire, decimal } = getPrices(itemData.price);
  const item = {
    id: itemData.id,
    title: itemData.title,
    price: {
      currency: itemData.currency_id,
      amount: entire,
      decimals: decimal,
    },
    picture: itemData.pictures[0].url,
    condition: itemData.condition,
    free_shipping: itemData.shipping.free_shipping,
    sold_quantity: itemData.sold_quantity,
    description: itemDescription.plain_text,
  };

  res.status(200).json({ author, item });
};

module.exports = itemsCtrl;
