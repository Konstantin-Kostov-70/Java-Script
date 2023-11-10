module.exports = {
    get(req, res) {
        res.locals = {
            title: 'Accessory',
        }
        res.render('createAccessory');
    },
    async post(req, res) {
        const accessory = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl || undefined,
            price: Number(req.body.price)
        };
        try {
            await req.accessory.createAccessory(accessory);
            res.redirect('/');
        } catch (error) {
            console.log('Error create accessories');
            console.log(error.message);
            res.redirect('/accessories');
        }
    }
}