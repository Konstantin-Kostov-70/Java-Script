function solve(product, count) {
    let price = 0
    switch (product) {
       case 'coffee':
         price = 1.50
         break;
       case 'water':
        price = 1.00
         break
       case 'coke':
        price = 1.40
         break
       default:
        price = 2.00
    }
    return (price * count).toFixed(2)
}

console.log(solve("water", 5))