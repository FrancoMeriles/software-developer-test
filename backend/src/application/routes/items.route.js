const { Router } = require('express');

const router = Router();

const { getItemById, getItemsBySearch } = require('../controllers/items.controller');

router
  .route('/')
  .get(getItemsBySearch);

router
  .route('/:id')
  .get(getItemById);

module.exports = router;
