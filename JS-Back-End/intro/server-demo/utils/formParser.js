const fs = require('fs')

async function parse(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', data => body += data);
        req.on('end', () => {
            let result;
            try {
                result = body
                    .split('&')
                    .map(p => p.split('='))
                    .reduce((a, p) => Object.assign(a, { [p[0]]: p[1] }), {});
                resolve(result)
            } catch (error) {
                reject(error)
            }
        });
    });
}

//body look like this: name=Bud&serial=1234
/* after split we receive array 
   [
    ['name', 'Bud'],
    ['serial', '1234'],
   ]
*/

/* we make demo function to test parse function
async function demo() {
    const src = fs.createReadStream('JS-Back-End/intro/server-demo/utils/data.txt')
    const result = await parse(src)
    console.log(result);
 }
*/

// demo();

module.exports = parse;



