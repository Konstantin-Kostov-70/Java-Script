function solve(input) {
    let num = input.shift()
    let allPlants = {}
    for (let index = 0; index < num; index++) {
       let [plant, rarity] = input.shift().split('<->')
       allPlants[plant] = {
        rarity: Number(rarity),
        rating: []
       }
    }
    
    let line = input.shift()

    while (line !== 'Exhibition') {
        let [command, data] = line.split(': ')

        switch(command) {
            case 'Rate':
            
                let [plant, rating] = data.split(' - ')
                if(allPlants.hasOwnProperty(plant)) {

                    allPlants[plant]['rating'].push(Number(rating))
                }
                else {
                    console.log('error')
                }
                break
            case 'Update':
                let [plantName, rarity] = data.split(' - ')
                if(allPlants.hasOwnProperty(plantName)) {

                    allPlants[plantName]['rarity'] = rarity
                }
                else {
                    console.log('error')
                }
                break
            case 'Reset':
                let name = data
                if(allPlants.hasOwnProperty(name)) {

                    allPlants[name]['rating'] = []
                }
                else {
                    console.log('error')
                }

                break 
        }

        line = input.shift()
    }

    console.log("Plants for the exhibition:")

    for (plant in allPlants) {
        let average = 0
        if (allPlants[plant]['rating'].length > 0) {
           average = allPlants[plant]['rating'].reduce((sum, el) => sum + el, 0) / allPlants[plant]['rating'].length
        }
        console.log(`- ${plant}; Rarity: ${allPlants[plant]['rarity']}; Rating: ${average.toFixed(2)}`)
    }
}

solve((["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]))
