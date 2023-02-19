function workingHours(input){
    let hour = Number(input[0])
    let day = input[1]

    if (10 <= hour && hour <= 18 && day !== 'Sunday'){
        console.log('open')

    } else {
        console.log('closed')
    }
}

workingHours(["11",
"Friday"])


