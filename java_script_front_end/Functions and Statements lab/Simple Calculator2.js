function solve(firstNum, secondNum, operation) {
    const add = (a, b) => a + b
    const subtract = (a, b) => a - b
    const divide = (a, b) => a / b
    const multiply = (a, b) => a * b

    const operations = {
        add,
        subtract,
        divide,
        multiply
    }
    
    return operations[operation] (firstNum, secondNum)
}

console.log(solve(50, 78, 'add'))