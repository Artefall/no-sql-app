const express = require('express');
const userRouter = express.Router();
const userContorller = require('../controllers/user-controller');

userRouter.get('/', userContorller.usersList);
userRouter.get('/addUser', userContorller.addUser);
userRouter.get('/registration');
userRouter.get('/auth');

userContorller.post('/auth');
userRouter.post('/registration');


module.exports = userRouter;