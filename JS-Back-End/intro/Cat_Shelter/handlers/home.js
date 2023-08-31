const url = require('url');
const fs = require('fs');
const path = require('path');
const cat = require('../data/cats');

module.exports = (req,res) => {
    const newUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathname = newUrl.pathname;

    if (pathname == '/' && req.method == 'GET') {
        let filePath = path.normalize(
            path.join(__dirname, '../views/home/index.html')
        );
        fs.readFile(filePath,(err, data) => {
            if (err) {
               console.log(err); 
               res.writeHead(404, {
                'Content-type': 'text/plain'
               });
               res.write('404 not found');
               res.end();
               return;
            }
            res.writeHead(200, {
                'Content-type': 'text/html'
               });
            res.write(data);
            res.end();
        });
    } else {
        return true
    }
}
