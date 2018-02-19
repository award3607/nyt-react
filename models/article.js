const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    date: Date,
    url: String,
    byline: String,
    snippet: String,
    isSaved: {type: Boolean, default: true}
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;