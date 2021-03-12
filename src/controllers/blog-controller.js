const Post = require('../models/Post');

module.exports = {

    feed: (req, res) => {
        Post.find()
            .then(posts =>  res.render("blog/feed.hbs", {posts: posts}))
            .catch(err => console.log(`Error occured while downloaded posts`));  
    },
    
    addRender: (req,res) => {
        res.render("blog/add-post.hbs");
    },

    addHandler: (req, res) => {

        const newPost = new Post({
            title: req.body.title,
            text: req.body.text
        });

        newPost.save()
                .then(() => res.redirect('/blog'))
                .catch(err => console.log(err));
    },

    searchPost: (req, res) => {
        const searchedString = req.query.searchedString;

        const searchParams = {
            "$or": [{title: {"$regex": searchedString}}, {text: {"$regex": searchedString}}]
        }

        Post.find(searchParams)
                .then(foundPosts => res.json(JSON.stringify(foundPosts)))
                .catch(console.log);

    }
}