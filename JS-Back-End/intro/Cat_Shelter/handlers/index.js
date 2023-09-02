const homeHandler = require('./home');
const staticFiles = require('./static-files')
const catHandler = require('./cat')

module.exports = [homeHandler, catHandler, staticFiles];