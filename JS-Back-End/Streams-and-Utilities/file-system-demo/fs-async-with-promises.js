const fs = require('fs/promises')

console.log('before with promise:');
handleFiles()
console.log('after with promise:');


// function handleFiles() {
//     const promise = fs.readFile('./package.json')
//     promise.then(data => {
//         console.log(data.toString());
//     })
// }


async function handleFiles () {
    const data = await fs.readFile('./package.json');
    console.log(data.toString());
}


