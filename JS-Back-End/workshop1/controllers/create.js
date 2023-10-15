module.exports = {
    get(req, res) {

        res.locals = {
            title: 'Car Listening'
        }
        res.render('create');
    },
    async post(req, res) {
        const car = {
           name: req.body.name,
           description: req.body.description,
           imageUrl: req.body.imageUrl,
           price: Number(req.body.price)
        };
        await req.storage.createCar(car);
        res.redirect('/');
      
    }
};