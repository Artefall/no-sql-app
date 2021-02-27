const Server = require('./classes/Server');
const Database = require('./classes/Database');

const CONFIG = require('../config');


new Database()
            .connect()
            .then(() => new Server(CONFIG.WEB_SERVER_PORT).start())
            .catch(err => console.log(`Error occured while starting server`));