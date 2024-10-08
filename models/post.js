const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: String,
    author: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);
