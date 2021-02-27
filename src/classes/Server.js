const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const cookieParser = require('cookie-parser');

const homeRouter = require('../routers/home-router');
const blogRouter = require('../routers/blog-router');
const shopRouter = require('../routers/shop-router');
const userRouter = require('../routers/user-router');

const CONFIG = require("../config");

class Server {
    constructor(port){
        this.app = express();
        this.port = port;

        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cookieParser());

        this.app.use('/', homeRouter);
        this.app.use('/blog', blogRouter);
        this.app.use('/shop', shopRouter);
        this.app.use('/users', userRouter);

    }

    start(){
        this.app.listen(this.port, () => `Server started in port ${this.port}`);
    }
}

module.exports = Server;