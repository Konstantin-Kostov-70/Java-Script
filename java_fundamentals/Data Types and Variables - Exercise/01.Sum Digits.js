function solve(num) {
    num = num.toString().split('')
    let sum = 0;
    for (x of num) {
        sum += Number(x)
    }

    console.log(sum)
}