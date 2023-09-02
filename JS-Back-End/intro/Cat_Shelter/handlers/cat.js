const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring')
const formidable = require('formidable');
const breeds = require('../data/breeds');
const cats = require('../data/cats');

module.exports = (req,res) => {
    const newUrl =  new URL(req.url, `http://${req.headers.host}`)
    const pathname = newUrl.pathname

    if (pathname === '/cats/add-cat' && req.method === 'GET') {
        let filePath = path.normalize(
            path.join(__dirname,'../views/addCat.html')
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

        // const streamer = fs.createWriteStream(filePath)
        // streamer.on('error', (err) => {
        //     console.log(err);
        // });
        // streamer.on('data', (data) => {
        //     res.write(data)
        // });
        // streamer.on('end', () => {
        //     res.end()
        // });
       

    } else if (pathname === '/cats/add-breed' && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname,'../views/addBreed.html'))
        
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
        
        // const streamer = fs.createWriteStream(filePath)
        // streamer.on('data', (data) => {
        //     console.log(data);
        //     res.write(data)
        // });
        // streamer.on('end', () => {
        //     res.end()
        // });
        // streamer.on('error', (err) => {
        //     console.log(err);
        // });
        
    } else {
        return true
    }
}


