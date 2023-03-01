function solve(num1, num2, operator) {
    let operations = {
        'multiply': num1 * num2,
        'divide': num1 / num2,
        'add': num1 + num2,
        'subtract': num1 - num2
    }
    let result = operations[operator]
    return result
}

console.log(solve(5,
    5,
    'multiply'
    ))