function oscars(input){
    let actor = input[0];
    let academyPoints = Number(input[1]);
    let numOfjudges = Number(input[2]);

    for (let i = 1; i <= numOfjudges * 2; i += 2){
        let judgeNamePoint = input[i + 2].length;
        let judgePoints = Number(input[i + 3]);

        academyPoints += (judgeNamePoint * judgePoints) / 2;

        if (academyPoints >= 1250.5){
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
        }
        
    }
    let different = Math.abs(1250.5 - academyPoints);

    if (academyPoints < 1250.5){
        console.log(`Sorry, ${actor} you need ${different.toFixed(1)} more!`);

    } 

}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
