function solve(array1) {
    let personList = []
    for (let element of array1) {
        element = element.split(' ')
        let name = element[0]
        if (element.includes('not')) {
            if (!personList.includes(name)) {
                console.log(`${name} is not in the list!`)
            }
            else {
                let index = personList.indexOf(name)
                personList.splice(index, 1)
            }
        }
        else {
            if (!personList.includes(name)) {
                personList.push(name)
            }
            else {
                console.log(`${name} is already in the list!`)
            }
        }
    }

    personList.map(person => console.log(person))
}

solve(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)

console.log('-----------------------')

solve(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)