module.exports = {
    async get(req, res) {
        const id = req.params.id
        const car = await req.storage.getById(id)
        res.locals = {
            title: `Edit - ${car.name}`,
            car
        }
        if (car) {
            res.render('edit')
        }
        else {
            res.redirect('/404')
        }
    },
    async post(req, res) {
        const id = req.params.id
        const car = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            price: Number(req.body.price)
        }
        console.log(car);
        try {    
            await req.storage.editById(id, car)
            res.redirect('/')
        } catch (error) {
            res.redirect('/404')
        }
    }
}