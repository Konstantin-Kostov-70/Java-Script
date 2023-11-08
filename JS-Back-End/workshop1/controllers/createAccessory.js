module.exports = {
    get(req, res) {
        res.locals = {
            title: 'Accessory',
        }
        res.render('createAccessory')
    },
    async post(req, res) {
        const accessory = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            price: Number(req.body.price)
        };
        try {
            await req.storage.createAccessory(accessory);
            res.redirect('/');
        } catch (error) {
            console.log('Validation error', error);
            res.redirect('/accessories');
        }
    }
}