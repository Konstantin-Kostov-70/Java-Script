let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((acc, c) => acc + c, 0);
console.log(sum)

let arrObject = [
    {name: 'Ivan', age: 15},
    {name: 'Gosho', age: 22},
    {name: 'Pesho', age: 33},
]

let newArray =arrObject.reduce((acc, c, i, arr) =>{
   acc.names.push(c.name);
   acc.ages += c.age;
   acc.arrLength = arr.length
   return acc
}, {names: [], ages: 0, arrLength: 0})

console.log(`Persons with names ${newArray.names.join(', ')}, 
have total sum of ages:${newArray.ages}, array length is ${newArray.arrLength} 
and ages average is ${(newArray.ages / newArray.arrLength).toFixed(2)} `)