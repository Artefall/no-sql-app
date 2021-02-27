const mongoose = require('mongoose');

class Database{
    constructor(){
        mongoose.connect('mongodb://localhost/college', {useNewUrlParser: true, useUnifiedTopology: true})
            .then(() => console.log(`Successfuly connected!`))
            .catch(err => console.log(`Error, while connecting to database. Message: ${err}`));
    }

}

module.exports = Database;

//module.exports = Database;