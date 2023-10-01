const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const hbs = handlebars.create({
    extname: '.hbs'
})

module.exports = (app) => {
    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');
    app.use('/content', express.static('static') )
    //TODO: Setup the view engine

    //TODO: Setup the body parser

    //TODO: Setup the static files

};