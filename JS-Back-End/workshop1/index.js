// [x] initialize and configure express app
// [x] initialize template lib - handlebars
// [x] create home controller
// [x] bind routing
// [x] create layout
// [] create data services
// - [x] read all
// - [x] get one by id
// - [x] create
// - [] delete
// - [] edit
// - [x] search
// [x] implement controller
// - [x] home
// - [x] about
// - [x] details
// - [x] create
// - [] create Accessory
// - [] attach Accessory to car
// - [] update details to include accessory
// [x] add front-end code
// [x] add database connection
// [x] create Car model
// [x] create validate rules to Car model
// [x] upgrade Car services to use Car model
// [] create Accessory model


const express = require('express');
const handlebars = require('express-handlebars');
const connectDB = require('./config/DBconfig')
const Car = require('./models/Cars')

const { home } = require('./controllers/home');
const create = require('./controllers/create');
const deleteCar = require('./controllers/delete');
const editCar = require('./controllers/edit');
const { about } = require('./controllers/about');
const { details } = require('./controllers/details');
const { error } = require('./controllers/notFound');
const carsService = require('./services/carService');

const hbs = handlebars.create({
    extname: '.hbs'
});

start()

async function start() {
    // must await connectDB function because is promise
    await connectDB()

    const app = express();
    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');

    app.listen(3000, console.log('App listen in port 3000'));

    app.use('/static', express.static('static'));
    app.use(express.urlencoded({ extended: true }));
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
}