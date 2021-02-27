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
    }
}