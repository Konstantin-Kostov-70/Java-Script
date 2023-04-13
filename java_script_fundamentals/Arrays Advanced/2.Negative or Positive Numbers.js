function solve(array1) {
    newArray = []
    array1.map(x => x < 0 ? newArray.unshift(x) : newArray.push(x))
    console.log(newArray.join('\n'))
}

solve(['7', '-2', '8', '9'])