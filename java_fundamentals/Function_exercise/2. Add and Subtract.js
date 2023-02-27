function solve(...other) {
    let numbers = [...other]
    let result = (numbers[0] +  numbers[1]) - numbers[2]
    return result
}

console.log(solve(23,6,10))