const express = require('express');
const homeRouter = express.Router();
const homeContorller = require('../controllers/home-controller');

homeRouter.get('/', homeContorller.greetings);

module.exports = homeRouter;