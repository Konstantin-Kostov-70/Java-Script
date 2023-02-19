function football(input){
    let points = 0
    let w = 0
    let d = 0
    let l = 0
    let index  = 0
    let tim = input[index];
    index ++;
    let games = Number(input[index]);
    index ++;
    let end = index + games

    for(index; index < end; index ++){
        let game = input[index];
        switch(game){
            case 'W':
                w ++;
                points += 3;
                break;

            case 'D':
                d ++;
                points ++;
                break;

            case 'L':
                l ++;
                break;
        }

    }
    
    let percentWinGames = (w / games) * 100
    if (games > 0){
        console.log(`${tim} has won ${points} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${w}`);
        console.log(`## D: ${d}`);
        console.log(`## L: ${l}`);
        console.log(`Win rate: ${percentWinGames.toFixed(2)}%`)
    } else {
        console.log(`${tim} hasn't played any games during this season.`)
    }
}

football(["Liverpool",
"10",
"W",
"D",
"D",
"W",
"L",
"W",
"D",
"D",
"W",
"W"])
