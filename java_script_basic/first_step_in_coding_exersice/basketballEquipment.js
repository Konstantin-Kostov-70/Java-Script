function basketball(input){
    let tax = Number(input[0]);

    let sneakers = tax * 0.60;
    let equipment = sneakers * 0.80;
    let ball = equipment / 4;
    let accessories = ball / 5;
    let totalSum = tax + sneakers + equipment + ball + accessories;

    console.log(totalSum);
};

basketball(["365 "]);















































