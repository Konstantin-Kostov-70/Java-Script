function solve(array) {
    let addressBook = {}

    array.forEach(info => {
        info = info.split(':');
        let name = info[0];
        let address = info[1];
        
        addressBook[name] = address
    });

    Object
    .keys(addressBook)
    .sort((a, b) => a.localeCompare(b))
    .forEach(key => console.log(`${key} -> ${addressBook[key]}`))
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)