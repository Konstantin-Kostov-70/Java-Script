function nameGame(input){
    let index =0;
    let command = input[index];
    let maxPoints = 0;
    let winer = '';

    while(command !== 'Stop'){
        let points = 0;
        let name = command;
        for (let nameIdx = 0; nameIdx < name.length; nameIdx ++){
            let char = name.charCodeAt(nameIdx);
            index ++;
            let num = Number(input[index]);

            if (char === num){
                points += 10;
            } else {
                points += 2;
            }
        }

        if (points >= maxPoints){
            maxPoints = points
            winer = name
        }
        
        index ++;
        command = input[index];
    }
    console.log(`The winner is ${winer} with ${maxPoints} points!`)
}

nameGame(["Pesho",
"124",
"34",
"111",
"97",
"99",
"Gosho",
"98",
"124",
"88",
"76",
"18",
"Stop"])


