function numbers(input){
    let first = Number(input[0]);
    let second = Number(input[1]);
    let total = 0;
    let buffer = '';

    for (let i = first; i <= second; i++){
        if (i % 9 === 0){
            total += i
            buffer += i + "\n"
        }
    }

    console.log(`The sum: ${total}`)
    console.log(buffer)
}

numbers(["100", "200"])