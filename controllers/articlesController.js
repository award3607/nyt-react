const Article = require('../models/article');

exports.getAll = (req, res) => {
    Article.find({})
    .then(function(articles) {
        console.log(`Found ${articles.length} articles`);
        res.json(articles);
    })
    .catch(function(err) {
        console.log(err);
        res.json(err);
    });
};

exports.addOne = (req, res) => {
    Article.create(req.body)
    .then(function(newArticle) {
        console.log(`Add article with id ${newArticle._id}`);
        res.json(newArticle);
    })
    .catch(function(err) {
        console.log(err);
        res.json(err);
    });
};

exports.deleteOne = (req, res) => {
    Article.findByIdAndRemove(req.params.id)
    .then(function(deletedArticle) {
        console.log(`Deleted article id ${deletedArticle._id}`);
        res.send(`Deleted article id ${deletedArticle._id}`);
    })
    .catch(function(err) {
        console.log(`Failed to delete article id ${deletedArticle._id}`);
        res.send(err);
    })
};