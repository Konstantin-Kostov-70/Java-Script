function tenis(input){
    let num = Number(input[0]);
    let firstPoints = Number(input[1])
    let points = 0;
    let wins = 0

    for (let i = 2; i < num + 2; i++){
        let position = input[i];

        switch(position){
            case 'W':
                points += 2000;
                wins += 1
                break;

            case 'F':
                points += 1200;break;

            case 'SF':
                points += 720;break;
        }
    }

    let totalPoints = firstPoints + points
    let average = Math.floor(points / num)
    let winPercent = ((wins / num) * 100).toFixed(2)

    console.log(`Final points: ${totalPoints}`)
    console.log(`Average points: ${average}`)
    console.log(winPercent + '%')
}

tenis(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
