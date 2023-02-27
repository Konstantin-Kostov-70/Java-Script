function solve(...other) {
    let numbers = [...other].sort((a, b) => a - b)
    let smallest = numbers[0]
    return smallest
}

console.log(solve(2,5,3))