const mongoose = require('mongoose');

const  CONNECTION_STRING = 'mongodb://127.0.0.1:27017';
const DATABASE_NAME = 'test2';

async function connectDB() {
    try {
        await mongoose.connect(`${CONNECTION_STRING}/${DATABASE_NAME}`);
        console.log('Database is connected');  
    
    } catch (error) {
        console.error(error);
    }
}

// init function return promise 
module.exports = connectDB