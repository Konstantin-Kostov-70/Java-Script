const express = require('express');
// [] initialize and configure express app
// [] initialize templating lib
// [] create home controler
// [] bind routing
// [] create data services
// [] implement controler


const handlebars = require('express-handlebars');

const hbs = handlebars.create({
    extname: '.hbs'
});

const app = express();
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.listen(3000, console.log('App listen in port 3000'));

app.use('/static', express.static('static'));

app.get('/', (req, res) =>{
    res.locals = {
        title: 'Home'
    }
    res.render('index')
})

