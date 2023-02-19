function gold(input){
    let index = 0;
    let location = Number(input[index])

    for (let num = 0; num < location; num ++){
        let average = 0;
        let currentGold = 0;
        
        index ++;
        let proffit = Number(input[index])
        index ++;
        let days = Number(input[index])

        for ( let day = 1; day <= days; day ++){
            index ++;
            let goldPerDay = Number(input[index])
            
            currentGold += goldPerDay

        }
        average = (currentGold / days)

        if (average >= proffit){
            console.log(`Good job! Average gold per day: ${average.toFixed(2)}.`)
        } else {
            console.log(`You need ${Math.abs(average - proffit).toFixed(2)} gold.`)
        }
    }
}

gold(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])



