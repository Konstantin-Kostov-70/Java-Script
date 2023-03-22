let number = [31, 2 , 432, 32, 5 , -1]
let names = ['Kiro', 'Pesho', 'Ivan', 'Sasho']

// ascending sort number
let sortedAscNum = [...number].sort((a, b) => a - b) 
console.log(sortedAscNum)

// descending sort number
let sortedDescNum = [...number].sort((a, b) => b - a) 
console.log(sortedDescNum)

// ascending sort string
let sortedAscStr = [...names].sort((a, b) => a.localeCompare(b)) 
console.log(sortedAscStr)

// descending sort string
let sortedDescStr = [...names].sort((a, b) => b.localeCompare(a)) 
console.log(sortedDescStr)




