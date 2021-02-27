const express = require('express');
const userRouter = express.Router();
const userContorller = require('../controllers/user-controller');

userRouter.get('/', userContorller.usersList);
userRouter.get('/addUser', userContorller.addUser);

module.exports = userRouter;