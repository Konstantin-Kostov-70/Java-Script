// Higher-order function that takes a callback function as an argument

const calculate = (num1, num2, operation) => {
    return operation(num1, num2)
}

const add = (a, b) => (a + b)
const subtract = (a, b) => (a - b)
const multiply = (a, b) => (a * b)
const division = (a, b) => (a / b)

console.log(calculate(15, 3, add))
console.log(calculate(15, 3, subtract))
console.log(calculate(15, 3, multiply))
console.log(calculate(15, 3, division))