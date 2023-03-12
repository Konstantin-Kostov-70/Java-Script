function solve(input) {
    let allProducts = {}
    for (let product of input) {
        let letter = product[0]
        product = product.split(' : ')
    
        if (!allProducts.hasOwnProperty(letter)) {
            allProducts[letter] = []
        }
        allProducts[letter].push(product.join(': '))
    }
    Object
    .keys(allProducts)
    .sort((a, b) => a.localeCompare(b))
    .forEach(key => {
        console.log(key)

        let sortedProducts = allProducts[key]
        .sort((a, b) => a.localeCompare(b))

        sortedProducts.forEach(element => {
            console.log('  ' + element)  
        });
    })
}

solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)









