const Post = require('../models/Post');

module.exports = {

    feed: (req, res) => {
        Post.find()
            .then(posts =>  res.render("blog/feed.hbs", {posts: posts}))
            .catch(err => console.log(`Error occured while downloaded posts`));  
    },
    
    add: (req,res) => {
        res.render("blog/add-post.hbs");
    },

    addPost: (req, res) => {

        const newPost = new Post({
            title: req.body.title,
            text: req.body.text
        });

        newPost.save()
                .then(() => res.redirect('/blog'))
                .catch(err => console.log(err));
    },

// ----------------------------------------


    searchPost: (req, res) => {
        const searchedString = req.query.searchedString;

        const searchParams = {
            "$or": [{title: {"$regex": searchedString}}, {text: {"$regex": searchedString}}]
        }

        Post.find(searchParams)
                .then(foundPosts => res.json(JSON.stringify(foundPosts)))
                .catch(console.log);

    },

    update: (req,res) => {
        res.render('blog/update.hbs');
    },

    delete: (req,res) => {
        res.render('blog/delete.hbs');
    },

    updatePost: (req,res) => {
        const {title, newTitle, newText} = req.body;

        Post.findOneAndUpdate({title: title}, {title: newTitle, text: newText})
                                                                        .then(() => console.log("Successfuly updated"))
                                                                        .catch(console.log);
        res.redirect('/blog');
    },

    deletePost: (req, res) => {
        const {title} = req.body;

        Post.deleteOne({title: title})
                                    .then(() => console.log("Successfuly deleted"))
                                    .catch(console.log);
                            
        res.redirect('/blog');

    }

    
}