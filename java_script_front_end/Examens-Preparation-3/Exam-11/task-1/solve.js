function solve(input) {
    const num = Number(input.shift())
    let allPlants = {}
    for (let index = 0; index < num; index++) {
        let [plant, rarity] = input.shift().split('<->')
        allPlants[plant] = {
            rarity: rarity,
            rating: []
        }
    }

    for (let line of input) {
        if (line === 'Exhibition') {
            break
        }
        let [command, plantInfo] = line.split(': ')
        plantInfo = plantInfo.split(' - ')
        let plant = plantInfo[0]

        switch (command) {
            case 'Rate':
                if (allPlants.hasOwnProperty(plant)) {
                    let rate = Number(plantInfo[1])
                    allPlants[plant]['rating'].push(rate)
                }
                else {
                    console.log('error')
                }
                break;

            case 'Update':

                if (allPlants.hasOwnProperty(plant)) {
                    let newRarity = plantInfo[1]
                    allPlants[plant]['rarity'] = newRarity
                }
                else {
                    console.log('error')
                }
                break

            default:

                if (allPlants.hasOwnProperty(plant)) {
                    allPlants[plant]['rating'] = []
                }
                else {
                    console.log('error')
                }
                break;
        }
    }

    console.log('Plants for the exhibition:')

    for (let plant in allPlants) {
        let rating = allPlants[plant]['rating']
        let average = 0
        if (rating.length > 0) {
            average = rating
                .reduce((sum, element) => sum + element, 0) / rating.length
        }
        console.log(`- ${plant}; Rarity: ${allPlants[plant]['rarity']}; Rating: ${average.toFixed(2)}`)
    }
}

solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
