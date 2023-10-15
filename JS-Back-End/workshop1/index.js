// [x] initialize and configure express app
// [x] initialize templating lib
// [x] create home controler
// [x] bind routing
// [x] create layuot
// [] create data services
// - [x] read all
// - [x] get one by id
// - [x] create
// - [] delete
// - [] edit
// - [x] search
// [x] implement controler
// - [x] home
// - [x] about
// - [x] details
// - [x] create
// [x] add front-end code


const express = require('express');
const handlebars = require('express-handlebars');
const { home } = require('./controllers/home');
const create  = require('./controllers/create');
const deleteCar  = require('./controllers/delete');
const editCar  = require('./controllers/edit');
const { about } = require('./controllers/about');
const { details } = require('./controllers/details');
const { error } = require('./controllers/notFound');
const carsService = require('./services/carService');

const hbs = handlebars.create({
    extname: '.hbs'
});

const app = express();
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.listen(3000, console.log('App listen in port 3000'));

app.use('/static', express.static('static'));
app.use(express.urlencoded({extended: true}));
app.use(carsService());

app.get('/', home);
app.get('/create', create.get);
app.post('/create', create.post);
app.get('/delete/:id', deleteCar.get);
app.post('/delete/:id', deleteCar.post);
app.get('/edit/:id', editCar.get);
app.post('/edit/:id', editCar.post);
app.get('/about', about);
app.get('/details/:id', details);
app.all('*', error);
