function solve(array1, info) {
    let takeNum = info[0]
    let deleteNum = info[1]
    let searchNum = info[2]

    let newArray = array1
    .slice(0, takeNum)

    newArray
    .splice(0, deleteNum)
     
    let count = newArray.filter(x => x === searchNum).length
    console.log(`Number ${searchNum} occurs ${count} times.`)  
}

solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )