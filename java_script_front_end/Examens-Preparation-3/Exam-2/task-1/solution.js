function solve(input) {
    const num = Number(input.shift())
    let obj = {}
    for (let index = 0; index < num; index++) {
        let [car, mileage, fuel] = input.shift().split('|')

        obj[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        }
    }

    for (let line of input) {
        if (line === 'Stop') {
            break
        }
        let commands = line.split(' : ')
        let command = commands.shift()
        let car = commands.shift()
        switch (command) {
            case 'Drive':
                let [distance, fuel] = commands
                if (obj[car]['fuel'] - Number(fuel) < 0) {
                    console.log('Not enough fuel to make that ride')

                }
                else {
                    obj[car]['mileage'] += Number(distance)
                    obj[car]['fuel'] -= Number(fuel)
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)

                    if (obj[car]['mileage'] > 100000) {
                        delete obj[car]
                        console.log(`Time to sell the ${car}!`)
                    }
            
                }
                break
            case 'Refuel':
                let refuel = Number(commands[0])
                let neededFuel = 0
                if (obj[car]['fuel'] + refuel > 75) {
                    neededFuel = 75 - obj[car]['fuel']
                    obj[car]['fuel'] = 75
                }
                else {
                    obj[car]['fuel'] += refuel
                    neededFuel = refuel
                }

                console.log(`${car} refueled with ${neededFuel} liters`)
                break

            case 'Revert':
                let kilometers = Number(commands[0])
                if (obj[car]['mileage'] - kilometers < 10000) {
                    obj[car]['mileage'] = 10000
                }
                else {
                    obj[car]['mileage'] -= kilometers 
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`)
                }
                break

        }
    }

    for(let car in obj) {
        console.log(`${car} -> Mileage: ${obj[car]['mileage']} kms, Fuel in the tank: ${obj[car]['fuel']} lt.`)
    }
}

solve([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  )