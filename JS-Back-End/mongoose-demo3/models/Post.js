const {Schema, model, Types: {ObjectId}} = require('mongoose');

const postSchema = new Schema({
    author: String,
    title: {type: String, required: true, minLength: 5},
    content: {type: String, required: true},
    comments: {type: [ObjectId], default: [], ref: 'Comment'}
});
const Post =  model('Post',postSchema);
module.exports = Post