const mongoose = require('mongoose');
const Post = require("./models/Post");
const Comment = require("./models/Comment");
const CONNECTION_STR = 'mongodb://127.0.0.1:27017';
const DATABASE_NAME = 'test1';

async function connectDB() {
    try {
        await mongoose.connect(`${CONNECTION_STR}/${DATABASE_NAME}`);
        console.log(`You have be conected to database:${DATABASE_NAME}...`);
        // ====================================================================
        // Create colection Post and comment in DB test1
        // *********************************************
        // await Post.create({
        //     author: 'Peter',
        //     title: 'My first post',
        //     content: "Lorem ipsum dolor"
        // });

        // await Comment.create({
        //     author: 'Jhon',
        //     content: 'Nice article!',
        // })
        // ====================================================================== 

        // Make relationship between Post and Comment some pushed reference to comments in Post colection
        // **********************************************************************************************

        // const comment = await Comment.findOne({});
        // const post = await Post.findOne({});
        // post.comments.push(comment);
        // post.save()
        // console.log(post);
        // ======================================================================
        
        // with method populate() can read all comments
        // ********************************************
        const post = await Post.findOne({}).populate('comments');
        console.log(post);
    } catch (error) {
        console.error(error);
    }
}

connectDB()