const express = require('express');
const blogRouter = express.Router();
const blogController = require('../controllers/blog-controller');


blogRouter.get('/', blogController.feed);
blogRouter.get('/add', blogController.add);
blogRouter.get('/api', blogController.searchPost);
blogRouter.get('/update', blogController.update);
blogRouter.get('/delete', blogController.delete);

blogRouter.post('/add', blogController.addPost);
blogRouter.post('/update', blogController.updatePost);
blogRouter.post('/delete', blogController.deletePost);


module.exports = blogRouter;