const url = require('url');
const fs = require('fs');
const path = require('path');

function getContent(url) {
    if (url.endsWith('css')) {
        return 'text/css'
    }
    else if (url.endsWith('html')) {
        return 'text/html'
    }
    else if (url.endsWith('png')) {
        return 'text/png'
    }
    else if (url.endsWith('ico')) {
        return 'text/ico'
    }
    else if (url.endsWith('js')) {
        return 'text/js'
    }

}

module.exports = (req,res) => {
    const newUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathname = newUrl.pathname;

    if (pathname.startsWith('/content') && req.method == 'GET') {
        fs.readFile(`./${pathname}`,'utf-8',(err, data) => {
            if (err) {
               console.log(err); 
               res.writeHead(404, {
                'Content-type': 'text/plain'
               });
               res.write('404 not found');
               res.end();
               return;
            }
            console.log(pathname);
            res.writeHead(200, {
                'Content-type': getContent(pathname)
               });
            res.write(data);
            res.end();
        });
    } else {
        return true
    }
}
