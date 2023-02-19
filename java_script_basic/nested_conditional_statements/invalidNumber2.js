function invalidNumber(input){
    let num = Number(input[0])
    let isValid = 100 <= num && num <= 200 || num === 0

    if (!isValid){
        console.log('invalid')
    }
}

invalidNumber(["10"])