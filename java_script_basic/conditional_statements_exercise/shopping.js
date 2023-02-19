function shopping(input){
    let budget = Number(input[0])
    let numVideoCard = Number(input[1])
    let numCpu = Number(input[2])
    let numRam = Number(input[3])
    
    let videoCard = 250
    let cpu = (videoCard * numVideoCard) * 0.35
    let ram = (videoCard * numVideoCard) * 0.10

    let total = numVideoCard * videoCard + numCpu * cpu + numRam * ram
    
    if (numVideoCard > numCpu){
        total *= 0.85
    }

    let finalSum = budget - total

    if (finalSum < 0){
        console.log(`Not enough money! You need ${Math.abs(finalSum).toFixed(2)} leva more!`)

    } else {
        console.log(`You have ${finalSum.toFixed(2)} leva left!`)

    }

}

shopping(["920.45",
"3",
"1",
"1"])

