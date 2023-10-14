module.exports = {
    async details(req, res) {
        const id = req.params.id
        const car = await req.storage.getById(id)
        if (car) {
            res.locals = {
                title: 'Details',
                car
            };
            res.render('details');
        }
        else {
            res.render('/404')
        } 
    }
};