function solve(input)  {
    const num = input.shift()
    
    let allCars = {}
    for (let index = 0; index < num; index++) {
        
        let [car, mileage, fuel] = input.shift().split('|')
        allCars[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        }
    }
    
    for (let line of input) {
        if (line === 'Stop') {
            break
        }
        let data = line.split(' : ')

        let command = data[0]
        let car = data[1]

        switch(command) {
            case 'Drive':
                let distance = Number(data[2])
                let fuel = Number(data[3])

                if (allCars[car]['fuel'] - fuel < 0) {
                    console.log("Not enough fuel to make that ride")
                }
                else {
                    allCars[car]['fuel'] -= fuel 
                    allCars[car]['mileage'] += distance
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
                }

                if (allCars[car]['mileage'] > 100000) {
                    delete allCars[car]
                    console.log(`Time to sell the ${car}!`)
                }
                break

            case 'Refuel':
                let fuels = Number(data[2])
                let fuelNeeded = 0
                if (allCars[car]['fuel'] + fuels > 75) {
                    fuelNeeded = 75 - allCars[car]['fuel']
                    allCars[car]['fuel'] = 75
                    
                }
                else {
                    allCars[car]['fuel'] += fuels
                    fuelNeeded = fuels
                }
                console.log(`${car} refueled with ${fuelNeeded} liters`)
                break
            case 'Revert':
                let kilometers = Number(data[2])
                if (allCars[car]['mileage'] - kilometers > 10000) {
                    allCars[car]['mileage'] -= kilometers
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`)
                }
                else {
                    allCars[car]['mileage'] = 10000
                }
                break
        }
    }

    for (car in allCars) {
        console.log(`${car} -> Mileage: ${allCars[car]['mileage']} kms, Fuel in the tank: ${allCars[car]['fuel']} lt.`)
    }
}

solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])