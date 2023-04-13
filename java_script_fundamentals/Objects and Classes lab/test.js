let person = {
    name: 'Iva',
    age: 15,
    isStudent: true
}

console.log(`${person['name']} is ${person.age} age old and is student ${person['isStudent']}`)
console.log('-------------------------------------------')

let copyPerson = Object.assign({}, person)

console.log(person)
console.log(copyPerson)
console.log('-------------------------------------------')

let array = [1, 2, 3, 4]
let copyArray = array.slice()

console.log(array)
console.log(copyArray)