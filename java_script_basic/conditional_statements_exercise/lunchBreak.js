function lunchBreak(input){
    let name = input[0]
    let episode = Number(input[1])
    let pause = Number(input[2])

    let loungeTime = pause / 8
    let relaxTime = pause / 4
    let leftTime  = pause - (loungeTime + relaxTime)
    let left = Math.abs(leftTime - episode)

    if (leftTime < episode){
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(left)} more minutes.`)
    } else {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(left)} minutes free time.`)

    }


}

lunchBreak(["Teen Wolf",
"48",
"60"])
