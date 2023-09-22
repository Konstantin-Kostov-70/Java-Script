const {Router} = require('express');
const router = Router();

router.get('/catalog',(req, res) => {
    res.status(201).send('Catalog page')
});

router.get('/catalog/:productId' ,(req, res) => {
    const params = req.params;
    res.status(201).send(`Product S/N ${params['productId']}`);
    console.log(req.params);
});

router.all('*', (req, res) => {
    res.send('404 not found')
})

module.exports = router