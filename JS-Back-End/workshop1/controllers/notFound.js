module.exports = {
    error(req, res) {
        res.locals = {
            title: '404'
        };
        res.render('404');
    }
};