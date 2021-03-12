const express = require('express');
const blogRouter = express.Router();
const blogController = require('../controllers/blog-controller');


blogRouter.get('/', blogController.feed);
blogRouter.get('/add', blogController.addRender);
blogRouter.get('/api', blogController.searchPost);

blogRouter.post('/add', blogController.addHandler);

module.exports = blogRouter;