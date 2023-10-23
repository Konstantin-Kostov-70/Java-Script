const mongoose = require('mongoose');

//  Schema

const petSchema = new mongoose.Schema({
    
name: String,
age: Number,
species: String,
color: String
});

// "pets" is collection in test1 database
const Pet = mongoose.model('pets', petSchema);

module.exports = Pet;

