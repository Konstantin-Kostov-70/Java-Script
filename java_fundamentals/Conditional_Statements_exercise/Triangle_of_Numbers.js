function triangle(num) {
    let output = ''
    for (let i = 1; i <= num; i++) {
        output += `${i} `.repeat(i)
        console.log(output)
        output = ''
    }
}

triangle(5)