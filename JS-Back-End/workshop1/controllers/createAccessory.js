module.exports = {
    get(req, res) {
        res.locals = {
            title: 'Accessory',
        }
        res.render('createAccessory')
    },
    async post(req, res) {
        let image = req.body.imageUrl
        if (image === '') {
            image = undefined
        }
        const accessory = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: image,
            price: Number(req.body.price)
        };
        try {
            await req.accessory.createAccessory(accessory);
            res.redirect('/');
        } catch (error) {
            console.log('Validation error', error);
            res.redirect('/accessories');
        }
    }
}