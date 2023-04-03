function solve(input) {
    let cityInfo = {}
    let line = input.shift()
    while (line !== 'Sail') {
        let [city, population, gold] = line.split('||')
        if (cityInfo.hasOwnProperty(city)) {
            cityInfo[city]['population'] += Number(population)
            cityInfo[city]['gold'] += Number(gold)
        }
        else {
           cityInfo[city] = {
            population: Number(population),
            gold: Number(gold)
           }
        }
         
        line = input.shift()
    }

    let info = input.shift()
    while (info !== 'End') {
        let commands = info.split('=>')
        let command = commands[0]
        let city = commands[1]
        switch (command) {
            case 'Plunder':
                let people = Number(commands[2])
                let gold = Number(commands[3])
                if (cityInfo.hasOwnProperty(city)) {
                    cityInfo[city]['population'] -= people
                    cityInfo[city]['gold'] -= gold
                    console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`)
                    if (cityInfo[city]['population'] <= 0 ||  cityInfo[city]['gold'] <= 0) {
                        delete cityInfo[city]
                        console.log(`${city} has been wiped off the map!`)
                    }
                }
                break

            case 'Prosper':
                let golds = Number(commands[2])
                if (golds < 0) {
                    console.log("Gold added cannot be a negative number!")
                }
                else {
                    cityInfo[city]['gold'] += golds
                    console.log(`${golds} gold added to the city treasury. ${city} now has ${cityInfo[city]['gold']} gold.`)
                }
                break
        }

        info = input.shift()
    }
    let count = Object.keys(cityInfo).length
    if (count > 0) {
        console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`)
        for(let town in cityInfo) {
            console.log(`${town} -> Population: ${cityInfo[town]['population']} citizens, Gold: ${cityInfo[town]['gold']} kg`)
        }
    }
    else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!")
    }
}

solve((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
)