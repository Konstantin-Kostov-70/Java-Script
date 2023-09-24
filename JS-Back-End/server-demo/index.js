const express = require('express');
const app = express()
const handlebars = require('express-handlebars');
const homeController = require('./src/home')
const catalogController = require('./src/catalog')

const hbs = handlebars.create({
    extname: '.hbs',
});

app.use('/content', express.static('static'))
app.use(express.urlencoded({extended: true}))

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.listen(3000);

app.get('/', homeController);
app.use('/catalog', catalogController);