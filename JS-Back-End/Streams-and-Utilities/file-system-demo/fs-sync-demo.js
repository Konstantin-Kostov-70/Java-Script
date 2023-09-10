const fs = require('fs');
const data = fs.readFileSync('./package.json');

console.log('before:');
console.log(data.toString());
console.log('after:');