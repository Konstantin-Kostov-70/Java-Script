function solve(input) {
    const num = Number(input.shift())
    let allCars = {}
    for (let index = 0; index < num; index++) {
        let [car, mileage, fuel] = input.shift().split('|')
        allCars[car] = {
            mileage: Number(mileage),
            fuel: Number(fuel)
        }
    }
    for (let line of input) {
        if(line === 'Stop') {
            break
        }
        line = line.split(' : ')
        let command = line[0]
        let car = line[1]

        switch (command) {
            case 'Drive':
                let distance = Number(line[2])
                let fuel = Number(line[3])
                if (allCars[car]['fuel'] - fuel < 0) {
                    console.log(`Not enough fuel to make that ride`)
                }
                else {
                    allCars[car]['fuel'] -= fuel
                    allCars[car]['mileage'] += distance
                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`)
                }
                if (allCars[car]['mileage'] >= 100000) {
                    delete allCars[car]
                    console.log(`Time to sell the ${car}!`)
                }
                break;

            case 'Refuel':
                let neededFuel = 0
                let amount = Number(line[2])
                if (allCars[car]['fuel'] + amount > 75) {
                    neededFuel = 75 - allCars[car]['fuel']
                    allCars[car]['fuel'] = 75
                }
                else {
                    allCars[car]['fuel'] += amount
                    neededFuel = amount
                }
                console.log(`${car} refueled with ${neededFuel} liters`)
                break;

            default:
                let kilometers = Number(line[2])
                if (allCars[car]['mileage'] - kilometers > 10000) {
                    allCars[car]['mileage'] -= kilometers
                    console.log(`${car} mileage decreased by ${kilometers} kilometers`)
                }
                else {
                    allCars[car]['mileage'] = 10000
                }
                break;
        }
    }
    for (let car in allCars) {
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