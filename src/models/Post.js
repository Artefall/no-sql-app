const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: String,
    text: String,
    date: {type: Date, default: Date.now }
});

const Post = mongoose.model('post', PostSchema);

module.exports = Post;