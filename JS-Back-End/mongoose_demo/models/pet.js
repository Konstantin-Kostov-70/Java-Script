const mongoose = require('mongoose');

//  Schema

const petSchema = new mongoose.Schema({
    
name: {
    // this is validators !!!!
    type: String,
    requared: true,
    minLength: 4,
    maxLength: 10
},
age: Number,
species: String,
color: String
});

// Methods

petSchema.methods.hello = function () {
    console.log('Hello');
}

// Virtual properties(Calculated Properties)

petSchema.virtual('description').get(function(){
    return `I am ${this.species}, my name is ${this.name} and my color is ${this.color}.`
})

// "pets" is collection in test1 database
const Pet = mongoose.model('pets', petSchema);

module.exports = Pet;

