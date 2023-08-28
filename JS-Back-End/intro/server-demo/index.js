const http = require('http');
const router = require('./router');
const homeController = require('./controllers/homeController')
const aboutController = require('./controllers/aboutController');
const catalogController = require('./controllers/catalogController');
const createController = require('./controllers/createController');
const deleteController = require('./controllers/deleteController');

router.get('/', homeController);
router.get('/about', aboutController);
router.get('/catalog', catalogController);
router.post('/create', createController);
router.get('/delete', deleteController)

const server = http.createServer(requestHandler);

const port = 3000;

function requestHandler(req, res) {
    const url = new URL(req.url, 'http://localhost');
    console.log('>>> Url:', req.url, ', Method:', req.method);
    const handler = router.match(req.method, url.pathname);  
    handler(req, res);
  
};

server.listen(port, () => console.log('Server listening on port: ' + port));