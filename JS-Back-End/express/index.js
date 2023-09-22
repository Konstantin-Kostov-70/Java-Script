const express = require('express');
const app = express();
app.listen(3000);

const middleware = require('./middleware')
const router = require('./router');
const isAdmin = require('./auth')
app.use(middleware)
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html', );
});

app.get('/create', isAdmin, (req, res) =>{
    res.send('<form method="POST"><input type="text"><button>Send</button></form>');
});

app.post('/create', (req, res) => {
    res.status(201).send('Article create');
});

app.use(router)

// app.get('/catalog', (req, res) => {
//     res.status(201).send('Catalog page')
// });

// app.get('/catalog/:productId', (req, res) => {
//     const params = req.params
//     res.status(201).send(`Product S/N ${params['productId']}`)
//     console.log(req.params);
// });

// app.all('*', (req, res) => {
//     res.send('404 not found')
// })