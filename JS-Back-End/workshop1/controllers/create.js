module.exports = {
    get(req, res) {

        res.locals = {
            title: 'Car Listening'
        }
        res.render('create');
    },
    async post(req, res) {
        let image = req.body.imageUrl
        if (image === '') {
            image = undefined
        }
        const car = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: image,
            price: Number(req.body.price)
        };
        try {
            await req.storage.createCar(car);
            res.redirect('/');
        } catch (error) {
            console.log('Validation error');
            res.redirect('/create');
        }
    }
};