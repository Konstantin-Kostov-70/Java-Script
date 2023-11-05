// const { query } = require("express");

module.exports = {
    async home(req, res) {
        // req.query have data from home page search form !!!
        let cars =  await req.storage.getAll(req.query);
        res.locals = {
            title: 'Home',
            query: req.query,
            cars,

        };
        res.render('index');
    }
};