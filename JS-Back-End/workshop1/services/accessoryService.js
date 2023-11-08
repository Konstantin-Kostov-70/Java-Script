const Accessory = require('../models/Accessories')

async function createAccessory(accessory) {
    await Accessory.create(accessory)
}

module.exports = () => (req, res, exit) => {
    req.accessory = {
        createAccessory,
    }
    exit();
}