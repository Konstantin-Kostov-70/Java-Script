function solve(input) {
    let obj = {}
    const num = input.shift();
    for (let index = 0; index < num; index++) {
        let [plant, rarity] = input.shift().split('<->');
        obj[plant] = {
            rarity: Number(rarity),
            rating: []
        }
    }

    for (let line of input) {
        if (line === 'Exhibition') {
            console.log('Plants for the exhibition:')
            break
        }
        let [command, plantInfo] = line.split(': ')
        let [plantName, value] = plantInfo.split(' - ')

        switch (command) {
            case 'Rate':
                if (obj.hasOwnProperty(plantName)) {
                    obj[plantName]['rating'].push(Number(value))
                }
                else {
                    console.log('error')
                }
                break
            case 'Update':
                if (obj.hasOwnProperty(plantName)) {
                    obj[plantName]['rarity'] = (Number(value))
                }
                else {
                    console.log('error')
                }
                break
            case 'Reset':
                if (obj.hasOwnProperty(plantName)) {
                    obj[plantName]['rating'] = []
                }
                else {
                    console.log('error')
                }
                break
        }
    }

    for (plant in obj) {
        let average = 0
        
        if (obj[plant]['rating'].length === 0) {
            average = 0
        }
        else {
           
            let sum  = obj[plant]['rating'].reduce((sum, num) => sum + num, 0)
            average = sum / obj[plant]['rating'].length
         
        }
       
        console.log(`- ${plant}; Rarity: ${obj[plant]['rarity']}; Rating: ${average.toFixed(2)}`)
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
