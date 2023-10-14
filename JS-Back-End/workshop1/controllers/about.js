module.exports = {
    about(req, res) {
        res.locals = {
            title: 'About'
        }
        res.render('about');
    }
};