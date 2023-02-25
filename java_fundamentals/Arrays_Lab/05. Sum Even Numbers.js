function solve(array1) {
    let evenSum = 0
    array1.map(x => x % 2 === 0 ? evenSum += Number(x) : x)
    console.log(evenSum)
}

solve(['1','2','3','4','5','6'])
solve(['3','5','7','9'])
solve(['2','4','6','8','10'])