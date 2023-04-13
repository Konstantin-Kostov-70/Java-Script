function solve(array1) {
    let num = array1[0]
    let first = array1.slice(1, num + 1)
    let last = array1.slice(array1.length - num , array1.length)
    console.log(first.join(' '))
    console.log(last.join(' '))  
}

solve([3, 6, 7, 8, 9])