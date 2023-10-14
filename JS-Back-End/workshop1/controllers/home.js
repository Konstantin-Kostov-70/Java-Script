module.exports = {
    async home(req, res) {
        const cars =  await req.storage.getAll();
        res.locals = {
            title: 'Home',
            cars
        };
        res.render('index');
    }
};