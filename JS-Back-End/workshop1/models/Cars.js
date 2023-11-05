const {Schema, model} = require('mongoose');

const carSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, default: ''},
    imageUrl: {type: String, default: 'notFound3.png'},
    price: {type: Number, required: true, min: 0}
});
// 'Car' is name of collection in DB
const Car = model('Car',carSchema);

module.exports = Car