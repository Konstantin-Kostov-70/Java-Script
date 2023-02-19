function toyShop(input){
    let puzzle = 2.60
    let doll = 3.00
    let bear = 4.10
    let minion = 8.20
    let truck = 2.00

    let trip = Number(input[0])
    let numPuzle = Number(input[1])
    let numDoll = Number(input[2])
    let numBear = Number(input[3])
    let numMinion = Number(input[4])
    let numTruck = Number(input[5])

    let allToysQuantity = numPuzle + numDoll + numBear + numMinion + numTruck
    let totalSum = puzzle * numPuzle + doll * numDoll + bear * numBear + minion * numMinion + truck * numTruck
    
    if (allToysQuantity >= 50){
        totalSum *= 0.75
    }

    totalSum *= 0.90
    let finalSum = totalSum - trip

    if (finalSum >= 0){
        console.log(`Yes! ${finalSum.toFixed(2)} lv left.`)

    } else {
        console.log(`Not enough money! ${Math.abs(finalSum).toFixed(2)} lv needed.`)
    }
}

toyShop (["40.8",
"20",
"25",
"30",
"50",
"10"])

    