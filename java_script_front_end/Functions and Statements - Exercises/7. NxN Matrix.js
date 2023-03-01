function solve(num) {
    let array1 = []
    for (let i = 0; i < num; i++) {
        for (let k = 0; k < num; k++) {
            array1.push(num)
        }
        console.log(array1.join(' '))
        array1 = []
    }
}

solve(7)