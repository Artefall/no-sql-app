const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const cookieParser = require('cookie-parser');
const path = require('path');

const homeRouter = require('../routers/home-router');
const blogRouter = require('../routers/blog-router');
//const shopRouter = require('../routers/shop-router');
//const userRouter = require('../routers/user-router');

class Server {
    constructor(port){
        this.PATH_TO_VIEWS = path.join(__dirname, "../views" );

        this.app = express();
        this.port = port;

        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cookieParser());

        hbs.registerPartials(this.PATH_TO_VIEWS);
        this.app.set('view engine', 'hbs');
        this.app.set('views', this.PATH_TO_VIEWS);

        this.app.use(express.static(this.PATH_TO_VIEWS));
        this.app.use('/', homeRouter);
        this.app.use('/blog', blogRouter);
        // this.app.use('/shop', shopRouter);
        // this.app.use('/users', userRouter);

    }

    start(){
        this.app.listen(this.port, () => console.log(`Server started in port ${this.port}`));
    }
}

module.exports = Server;