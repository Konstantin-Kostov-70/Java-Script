function shop(input){
    let sellGames = Number(input[0]);
    let hearthstone = 0
    let fornite = 0
    let overwatch = 0
    let others = 0
    
    for (let index = 1; index <= sellGames; index ++){
        let game = input[index];
        if (game === 'Hearthstone'){
            hearthstone ++;

        } else if (game === 'Fornite'){
            fornite ++;

        } else if (game === 'Overwatch'){
            overwatch ++;

        } else {
            others ++;
        }
    }

    let percentHearthstone = (hearthstone / sellGames) * 100;
    let percentFornite = (fornite / sellGames) * 100;
    let percentOverwatch = (overwatch / sellGames) * 100;
    let percentOthers = (others / sellGames) * 100;

    console.log(`Hearthstone - ${percentHearthstone.toFixed(2)}%`);
    console.log(`Fornite - ${percentFornite.toFixed(2)}%`);
    console.log(`Overwatch - ${percentOverwatch.toFixed(2)}%`);
    console.log(`Others - ${percentOthers.toFixed(2)}%`);
}

shop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])

