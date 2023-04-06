function solve(input) {
    let line = input.shift() 
    let allTowns = {}

    while (line !== 'Sail') {
        let [town, population, gold] = line.split('||')
        if (allTowns.hasOwnProperty(town)) {
            allTowns[town]['population'] += Number(population)
            allTowns[town]['gold'] += Number(gold)
        }
        else {
            allTowns[town] = {
                population: Number(population),
                gold: Number(gold)
            }
        }

        line = input.shift()
    }
    
    for (let info of input) {
        if (info === 'End') {
            break
        }
        info = info.split('=>')
        let command = info[0]
        let town = info[1]

        switch (command) {
            case 'Plunder':
                let people = Number(info[2])
                let gold = Number(info[3])
                allTowns[town]['population'] -= people
                allTowns[town]['gold'] -= gold

                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`)
                if (allTowns[town]['population'] <= 0 || allTowns[town]['gold'] <= 0) {
                    delete allTowns[town]
                    console.log(`${town} has been wiped off the map!`)
                }
                break;
        
            default:
                let golds = Number(info[2])
                if (golds < 0) {
                    console.log("Gold added cannot be a negative number!")
                }
                else {
                    allTowns[town]['gold'] += golds
                    console.log(`${golds} gold added to the city treasury. ${town} now has ${allTowns[town]['gold']} gold.`)
                }
                break;
        }
    }
     let count = Object.keys(allTowns).length

    if (count > 0) {
        console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`)
        for ( town in allTowns) {
           console.log(`${town} -> Population: ${allTowns[town]['population']} citizens, Gold: ${allTowns[town]['gold']} kg`)
        }
    }
    else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!")
    }
}

solve(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])
