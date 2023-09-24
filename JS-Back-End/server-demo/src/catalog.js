const router = require('express').Router();
const { getProducts } = require('./data')
const { createProduct } = require('./data')
const { getProductById } = require('./data')
const { updateProduct } = require('./data')

router.get('/', async(req,res) => {
    const products = await getProducts()
    res.locals = {
        products,
        title: 'Catalog'
    }
    res.render('catalog')
})

router.get('/create', (req, res) => {
    res.locals = {
        title: 'Create',
    }
    res.render('create')
})

router.post('/create', async(req, res) => {
    const product = {
        name: req.body.name,
        price: req.body.price,
        promoted: req.body.promoted ? true : false
    }
    await createProduct(product)
    res.redirect('/catalog')
    console.log(product);
})

router.get('/edit/:id', async(req, res) => {
    const product = await getProductById(req.params.id)
    console.log(product);
    res.locals = {
        _id: req.params.id,
        name: product.name,
        price: product.price,
        promoted: product.promoted
    }
    res.render('edit')
})

router.post('/edit/:id', async(req, res) => {
    const id = req.params.id;
    const product = {
        name: req.body.name,
        price: req.body.price,
        promoted: req.body.promoted
    };
    await updateProduct(id, product);
    console.log('update', product);
    res.redirect('/catalog')
})

module.exports = router

