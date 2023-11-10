// take only part of mongoose and from Types destructuring ObjectId, which we will use in the schema
const {Schema, model, Types: {ObjectId}} = require('mongoose');

const carSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, default: ''},
    imageUrl: {type: String, default: 'notFound3.png'},
    price: {type: Number, required: true, min: 0},
    // This is ref to model Accessory, type is Array with more one ObjectId, by default is empty Array
    accessories: {type: [ObjectId], default: [], ref: 'Accessory'}
   
  
});
// 'Car' is name of collection in DB
const Car = model('Car',carSchema);

module.exports = Car