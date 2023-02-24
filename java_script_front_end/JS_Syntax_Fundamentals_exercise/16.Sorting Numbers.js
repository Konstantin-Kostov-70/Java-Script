function solve(array1) {
    array1.sort((a, b) => a-b)
    let sortedArray = []

    while (array1.length > 0) {
        sortedArray.push(array1.shift())
        sortedArray.push(array1.pop())
    }

    return sortedArray
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
