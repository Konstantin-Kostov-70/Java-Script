function workingHours(input){
    let hour = Number(input[0])
    let day = input[1]
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    if (10 <= hour && hour <= 18 && days.includes(day)){
        console.log('open')

    } else {
        console.log('closed')
    }
}

workingHours(["11",
"Sunday"])


