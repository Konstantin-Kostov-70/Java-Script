const databases = require('../utils/database')

module.exports = (req, res) => {
    const id = req.url.split('=')[1];
    databases.deleteItem(id)
    res.writeHead(301, {
        'Location': '/catalog'
    });
    res.end();
}