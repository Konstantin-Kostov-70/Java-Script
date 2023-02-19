function fishingBoat(input){
    let budget = Number(input[0])
    let season = input[1]
    let fishermans = Number(input[2])
    let price = 0
    let totalSum = 0

    if (season === 'Spring'){
        price = 3000
        if (fishermans <= 6){
            price *= 0.90

        } else if (7 <= fishermans && fishermans <= 11) {
            price *= 0.85
            
        } else {
            price *= 0.75
        }

    } else if (season === 'Summer' || season === 'Autumn'){
        price = 4200
        if (fishermans <= 6){
            price *= 0.90

        } else if (7 <= fishermans && fishermans <= 11) {
            price *= 0.85
            
        } else {
            price *= 0.75
        }
    } else {
        price = 2600
        if (fishermans <= 6){
            price *= 0.90

        } else if (7 <= fishermans && fishermans <= 11) {
            price *= 0.85
            
        } else {
            price *= 0.75
        }
    }

    if (fishermans % 2 === 0 && season !== 'Autumn'){
        price *= 0.95
    }
    
    totalSum = budget - price

    if (totalSum >= 0) {
        console.log(`Yes! You have ${totalSum.toFixed(2)} leva left.`)

    } else {
        console.log(`Not enough money! You need ${Math.abs(totalSum).toFixed(2)} leva.`)
    }

}

fishingBoat(["2000",
"Winter",
"13"])


