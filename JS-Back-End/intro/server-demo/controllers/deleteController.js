const databases = require('../util/database')

module.exports = (req, res) => {
    const id = req.url.split('=')[1];
    console.log(id);
    databases.deleteItem(id)
    res.writeHead(301, {
        'Location': '/catalog'
    });
    res.end();
}