function swimmingRecord(input){
    let record = Number(input[0])
    let distance = Number(input[1])
    let time = Number(input[2])

    let swimingtTime = distance * time
    let bonusTime = Math.floor(distance / 15) * 12.5
    let realTime = swimingtTime + bonusTime
    let differennce = realTime - record

    if (realTime < record){
        console.log(`Yes, he succeeded! The new world record is ${realTime.toFixed(2)} seconds.`)

    } else {
        console.log(`No, he failed! He was ${differennce.toFixed(2)} seconds slower.`)      
          
    }

}

swimmingRecord(["55555.67",
"3017",
"5.03"])

