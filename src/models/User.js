const Schema = require('mongoose').Schema;

const UserSchema = new Schema({
    id: Number,
    name: String, 
    passwordHash: String, 
    karma: Number,
    registrationDate: Date
});

module.exports = UserSchema;