module.exports = {
    create(req, res) {


        res.locals = {
            title: 'Add Car'
        }
        res.render('create');
    }
};