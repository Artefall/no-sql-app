const mongoose = require('mongoose');

const Post = mongoose.Schema({
    title: String,
    text: String,
    date: {type: Date, default: Date.now }
});

mongoose.model('post', Post);

module.exports = Post;