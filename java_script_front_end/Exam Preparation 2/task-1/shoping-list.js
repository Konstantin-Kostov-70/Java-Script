function solve(input) {
    let products = input
    .shift()
    .split('!')
 
    let line = input.shift()
    
    while (line !== 'Go Shopping!') {
        
        line = line.split(' ')
        let command = line[0]
        let item = line[1]

        switch (command) {
            case 'Urgent':
                if (!products.includes(item)) {
                    products.unshift(item)
                }
                break;

            case 'Unnecessary':
                if(products.includes(item)) {
                    let itemIndex = products.indexOf(item)
                    products.splice(itemIndex, 1)
                }
                break;

            case 'Correct':
                let newItem = line[2]
                if (products.includes(item)) {
                    let itemIndex = products.indexOf(item)
                    products.splice(itemIndex, 1, newItem)
                }
            case 'Rearrange':
                if (products.includes(item)) {
                    let itemIndex = products.indexOf(item)
                    let itemRearrange = products.splice(itemIndex, 1)
                    products.push(itemRearrange)
                }
                break;
        }

        line = input
        .shift()
    }
    console.log(products.join(', '))
}

solve((["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Correct Potatoes Milk",
"Rearrange Milk",
"Go Shopping!"])
)
