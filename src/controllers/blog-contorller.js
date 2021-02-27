module.exports = {
    feed: (req, res) => {
        res.render();
    }

    add: (req, res) => {
        res.render();
    }

    addPostToDbHandler: (req, res) => {
        const title  = req.body.title;
        const text = req.body.text;
    }
}