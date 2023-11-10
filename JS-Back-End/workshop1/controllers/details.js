module.exports = {
    async details(req, res) {
        const id = req.params.id;
        try {
            const car = await req.storage.getById(id);
            const accessories = await req.storage.getPopulate(id);
            if (car) {
                res.locals = {
                    title: 'Details',
                    car,
                    accessories,
                };
                res.render('details');
            }
            else {
                res.render('404');
            } 
        } catch (error) {
            console.log(error);
            res.redirect('/');
        }
    }
};