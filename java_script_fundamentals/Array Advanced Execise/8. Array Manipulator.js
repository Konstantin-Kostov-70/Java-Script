function solve(array1, data) {
    for (let info of data) {
        info = info.split(' ')
        let command = info[0];
        let index = Number(info[1])
        
        switch (command) {
            case 'add':
                let element = Number(info[2])
                array1.splice(index, 0, element)
                break;
            
            case 'addMany':
                let elements = info.slice(2)
                .map(x => Number(x))
                array1.splice(index, 0, ...elements)
                break;

            case 'contains':
                console.log(array1.indexOf(index)) 
                break;

            case 'remove':
                array1.splice(index, 1)
                break;
            
            case 'shift':
                let spliceElement = array1.splice(0, index)
                array1.push(...spliceElement)
                break;
               
            case 'sumPairs':
                let pairs = []
                for (let i = 0; i < array1.length; i += 2) {
                    let sum = array1[i] + array1[i + 1] || array1[array1.length - 1]
                    pairs.push(sum)
                }
                array1.splice(0, array1.length, ...pairs)
                break;
            
            default:
                console.log(`[ ${array1.join(', ')} ]`)
        }
    }
}

solve([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
    )

// solve([1, 2, 3, 4, 5],
//     ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
//     )