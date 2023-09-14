const formidable = require('formidable')
const database = require('../utils/database')
const parseForm = require('../utils/formParser')

module.exports = async (req, res) => {
    // const form = new formidable.IncomingForm()
    // form.parse(req, (err, fields, files) => {
    //     console.log('create page');
    //     database.addItem(fields);
    //     res.writeHead(301, {
    //         'Location': '/catalog'
    //     });
    //     res.end();

    // });

    // let body = ''
    // req.on('data', data => {
    //     body += data
    // })
    // req.on('end', () => {
    //     console.log(body);
    // })
    // res.writeHead(301, {
    //     'Location': '/catalog'
    // });
    // res.end()

    const body = await parseForm(req);
    database.addItem(body);
    console.log(body);
    console.log('create item success');
    res.writeHead(301, {
        'Location': '/catalog'
    });
    res.end();

};