function beer(input){
    let name = input[0];
    let budget = Number(input[1]);
    let numBeer = Number(input[2]);
    let numChips = Number(input[3]);
    let beerPrice = 1.20
    let chipsPrice = (beerPrice * numBeer) * 0.45;

    let total = (numBeer * beerPrice) + Math.ceil((chipsPrice * numChips));
    let sum = (budget - total).toFixed(2);

    if (sum >= 0){
        console.log( `${name} bought a snack and has ${sum} leva left.`);
    } else {
        console.log(`${name} needs ${Math.abs(sum).toFixed(2)} more leva!`)
    }
}

beer(['George',
    '10',
    '2',
    '3',
    ])