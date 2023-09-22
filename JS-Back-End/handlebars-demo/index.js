const app = require('express')();
const handlebars = require('express-handlebars');
const hbs = handlebars.create({
    extname: '.hbs',
});
let visitors = 0;
const products = [
    {name: 'Widget', price: 15},
    {name: 'Gadget', price: 34},
    {name: 'Fluxor', price: 87}
]

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.listen(3000);

app.get('/', (req, res) => {
    res.locals = {
        count: visitors++,
        user: {
            username: 'Peter',
            email: 'peter@abv.bg'
        }
    }
     res.render('home');
});

app.get('/catalog', (req, res) => {
    res.locals = {
        products
    }
     res.render('catalog');
});