function solve(num) {
    let array1 = num.toString().split('')
    
    const isTrue = array1.every(x => x === array1[0])

    // const initialValue = 0;
    let sum  = array1.reduce((x, y) => Number(x) + Number(y))
    
    console.log(isTrue)
    console.log(sum)

}

solve(2222222)
solve(1234)