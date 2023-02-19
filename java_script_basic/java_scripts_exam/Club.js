function club(input){
    let income = 0;
    let index = 0;
    let target = Number(input[index]);
    index ++;
    let command = input[index];

    while(command !== 'Party!'){
        index ++;
        let number = Number(input[index]);

        let currentSum = 0;
        let coctailPrice = command.length;

        currentSum = coctailPrice * number
        if (currentSum % 2 !== 0){
            currentSum *= 0.75;
        }
        
        income += currentSum
        target -= currentSum
        
        if (target <= 0){
            console.log("Target acquired.");
            break;
        }

        index ++;
        command = input[index]
        
    }

    if (target > 0){
        console.log(`We need ${target.toFixed(2)} leva more.`)
    }

    console.log(`Club income - ${income.toFixed(2)} leva.`)
}

club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])
