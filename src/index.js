const express = require('express');
const app = express();

const CONFIG = require("../config");

app.get('/', (req, res) => {
    res.send("Hi cuty!    :^")
});

app.get('/users', (req,res) => {
    
});

app.listen(CONFIG.WEB_SERVER_PORT);