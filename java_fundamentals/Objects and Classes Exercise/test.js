// Check if the key exist in array

// let person = {
//     firstName: 'iva',
//     lastName: 'Ivanova',
//     age: 30,
// }

// console.log(person.hasOwnProperty('firstName'))

// ---------------------------------------------------------------
// update value in  Object 

// let objects = [
//     {ivan: 18},
//     {ivan: 45}, 
//     {ivan: 50},
//     {mario: 100}
// ]

// let myObj = {}

// for (let obj of objects) {
//     let key = Object.keys(obj)[0]
//     myObj[key] = obj[key]
// }

// console.log(myObj)

let num = 3
let names = ['ivo', 'mario', 'ivan']
let objects = []

for (let index = 0; index < num; index++) {
   let name = names[index]
   objects.push({name})
    
}

console.log(objects)