function solve(array) {
    let phoneBook = {};

    array.forEach(info => {

        let [name, number] = info.split(' ');
       

        phoneBook[name] = number
    })

    Object
    .keys(phoneBook)
    .forEach( key => {
        console.log(`${key} -> ${phoneBook[key]}`)
    });
}

solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)