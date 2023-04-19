function solve(input) {
    let list = input.shift().split('!')
    for (let line of input) {
        if (line === 'Go Shopping') {
            break
        }
        line = line.split(' ')
        let command = line[0]
        let item = line[1]

        switch (command) {
            case 'Urgent':
                if(!list.includes(item)) {
                    list.unshift(item)
                }
                break;

            case 'Unnecessary':
                if (list.includes(item)) {
                   let index = list.indexOf(item)
                   list.splice(index, 1)
                }
                break;

            case 'Correct':
                let newItem = line[2]
                if (list.includes(item)) {
                    let idx = list.indexOf(item)
                    list[idx] = newItem
                }
                break;

            default:
                if (list.includes(item)) {
                    let itemIdx = list.indexOf(item)
                    let el = list.splice(itemIdx, 1)
                    list.push(el)
                }
                break;
        }
    }
    console.log(list.join(', '))
}

solve(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

