function odd_num(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        let current = i * 2 - 1
        console.log(current);
        sum += current
    }

    console.log(`Sum: ${sum}`)
}

odd_num(5)