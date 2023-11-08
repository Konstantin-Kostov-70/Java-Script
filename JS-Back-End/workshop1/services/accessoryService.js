const Accessory = require('../models/Accessories')

async function createAccessory(accessory) {
    await Accessory.create(accessory)
}