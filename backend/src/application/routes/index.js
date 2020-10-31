const { Router } = require('express');

const router = Router();

// routes
router.use('/items', require('./items.route'));

module.exports = router;
