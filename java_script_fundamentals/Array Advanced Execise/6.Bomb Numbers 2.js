function solve(array1, bombInfo) {
    let bomb = bombInfo[0]
    let power = bombInfo[1]

    let bombIdx = array1.indexOf(bomb)
    let sum = 0

    while (bombIdx !== -1) {
        let startIdx = Math.max(0, bombIdx - power);
        let endIdx = Math.min(array1.length - 1, bombIdx + power)
        let count = endIdx - startIdx + 1

        array1.splice(startIdx, count)

        bombIdx = array1.indexOf(bomb) 
    }

    for (x of array1) {
        sum += x
    } 
    console.log(sum)
}

solve([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    )

