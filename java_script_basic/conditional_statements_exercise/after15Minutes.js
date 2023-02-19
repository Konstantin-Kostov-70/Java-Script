function after15Minutes(input){
    let hour = Number(input[0])
    let minutes = Number(input[1])

    let allMinutes = hour * 60 + minutes + 15
    hour = Math.floor(allMinutes / 60)
    minutes = allMinutes % 60

    if (hour > 23){
        hour = 0
    }

    if (minutes < 10){
        console.log(`${hour}:0${minutes}`)
        
    }else {

        console.log(`${hour}:${minutes}`)
    }
    
}

after15Minutes(["23", "59"])