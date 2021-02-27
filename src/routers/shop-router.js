const express = require('express');
const shopRouter = express.Router();
const shopContorller = require('../controllers/shop-controller');

shopRouter.get('/', shopContorller.products);

module.exports = shopRouter;