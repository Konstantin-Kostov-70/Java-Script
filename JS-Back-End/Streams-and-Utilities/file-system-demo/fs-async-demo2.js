// this is async read file

const fs = require('fs');

console.log('before:');
handleFiles()
console.log('after:');

function handleFiles ()  {
   const data = fs.readFile('./package.json', (err, data) => {
    console.log(data.toString());
   });
  
}