module.exports = {
    async get(req, res) {
        const id = req.params.id
        const car = await req.storage.getById(id)
        res.locals = {
            title: `Delete - ${car.name}`,
            car
        }
        if (car) {
            res.render('delete')
        }
        else {
            res.redirect('/404')
        }
    },
    async post(req, res) {
        const id = req.params.id
        try {    
            await req.storage.deleteById(id)
            res.redirect('/')
        } catch (error) {
            res.redirect('/404')
        }
    }
}