const express = require('express');
const blogRouter = express.Router();
const blogController = require('../controllers/blog-contorller');
const blogContorller = require('../controllers/blog-contorller');

blogRouter.get('/', blogController.feed);
blogRouter.get('/add', blogContorller.add)

module.exports = blogRouter;