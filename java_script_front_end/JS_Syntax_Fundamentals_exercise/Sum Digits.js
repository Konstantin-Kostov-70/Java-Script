function solve(num) {
    num = num.toString().split('')
    let sum = 0;
    for (x of num) {
        sum += Number(x)
    }

    console.log(sum)
}

solve(245678)
solve(97561)
solve(543)