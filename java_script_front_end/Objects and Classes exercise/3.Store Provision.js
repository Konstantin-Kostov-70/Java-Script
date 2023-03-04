function solve(...input) {
    let arrays = [...input]
    let store = {};
    for (let array of arrays) {
        for (let index = 0; index < array.length; index += 2) {

            let provision = array[index];
            let quantity = array[index + 1];

            if (provision in store === false) {
               store[provision] = 0;          
            }
            store[provision] += Number(quantity)
        }
    }

    for (let key of Object.keys(store)) {
        console.log(`${key} -> ${store[key]}`)
    } 
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )
