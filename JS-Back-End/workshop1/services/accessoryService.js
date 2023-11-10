const Accessory = require('../models/Accessories');
const {accessoryModelView} = require('./utils');

async function createAccessory(accessory) {
    await Accessory.create(accessory)
}

async function getAllAccessories() {
    const accessories =  await Accessory.find()
    return accessories.map(accessoryModelView)
}



module.exports = () => (req, res, exit) => {
    req.accessory = {
        createAccessory,
        getAllAccessories,
    }
    exit();
}