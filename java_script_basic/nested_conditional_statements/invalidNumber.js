function invalidNumber(input){
    let num = Number(input[0])

    if (!((100 <= num && num <= 200) || num === 0)){
        console.log('invalid')
    }
}

invalidNumber(["15"])