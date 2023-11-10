module.exports = {
    async get(req, res) {
        const id = req.params.id
        try {
            // const car = await req.storage.getById(id)
            // const accessories = await req.accessory.getAllAccessories()

            // with Promise.all() send all request parallel
            const [car, accessories] = await Promise.all([
                req.storage.getById(id),
                req.accessory.getAllAccessories()
            ]);
            // this filter shows only the accessories that the car does not have
            const existingId = car.accessories.map(a => a.toString());
            const availableAccessories = accessories.filter(a => existingId.includes(a.id.toString()) == false);
    
            res.locals = {
                title: 'Attach',
                car,
                accessories: availableAccessories,
            }
           res.render('attach');
            
        } catch (error) {
            console.error(error);
            res.redirect('/');
        }
    },
    async post(req, res) {
        const carId = req.params.id;
        const accessoryId = req.body.accessory
        try {
            await req.storage.attachAccessory(carId, accessoryId);
            res.redirect('/');
                
        } catch (error) {
            console.log('Error create accessories');
            console.log(error.message);
            res.redirect('/attach/' + carId);
        }
    }
}