function coins(input){
    let amount = Number(input[0]) * 100;
    let coinsCounter = 0;

    while(amount > 0){
        coinsCounter ++;

        if (amount >= 200){
            amount -= 200;
            
        } else if (amount >= 100){
            amount -= 100;
            
        } else if (amount >= 50) {
            amount -= 50;

        } else if (amount >= 20) {
            amount -= 20;

        } else if (amount >= 10) {
            amount -= 10;

        } else if (amount >= 5) {
            amount -= 5;

        } else if (amount >= 2) {
            amount -= 2;

        } else if (amount >= 1) {
            amount -= 1;
        }

    }

    console.log(coinsCounter)

}

coins(["2.73"])

