function oscars(input){
    let index = 0;
    let name = input[index];
    index ++;
    let academyPoints = Number(input[index]);
    index ++;
    let judges = Number(input[index]);
    let total = academyPoints;

    let isOscar = false

    for(let num = 0; num < judges; num ++){
        index ++;
        let judgeName = input[index];
        index ++;
        let judgePoints = Number(input[index])

        total += (judgeName.length  * judgePoints) /2

        if (total > 1250.5){
            isOscar = true
            break
        
        }
    }
    
    if (isOscar === true){
        console.log(`Congratulations, ${name} got a nominee for leading role with ${total.toFixed(1)}!`)

    } else {
        console.log(`Sorry, ${name} you need ${(1250.5 - total).toFixed(1)} more!`)
    }

}

oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
