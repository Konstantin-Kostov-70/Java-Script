function trip(input){
    let budget = Number(input[0]);
    let numberOfOvernight = Number(input[1]);
    let priceOvernight = Number(input[2]);
    let percentOther = Number([input[3]]);
    
    let totalOther = (budget * percentOther) / 100;

    if (numberOfOvernight > 7){
        priceOvernight *= 0.95
    }
    
    let totalOvernight = priceOvernight * numberOfOvernight;
    let currentSum = totalOvernight + totalOther
    let total = (budget - currentSum)

    if ((total) >= 0){
        console.log(`Ivanovi will be left with ${total.toFixed(2)} leva after vacation.`);

    } else {
        console.log(`${Math.abs(total).toFixed(2)} leva needed.`)
    }
}

trip(["500",
"7",
"66",
"15"])

