function coffe(input){
    let drink = input[0];
    let sugar = input[1];
    let numberOfDrink = Number(input[2]);
    let price = 0;

    if (drink === "Espresso"){
        if (sugar === "Without"){
            price = 0.90;
        } else if (sugar === "Normal"){
            price = 1.00;
        } else if (sugar === "Extra"){
            price = 1.20;
        }
    } else if (drink === "Cappuccino"){
        if (sugar === "Without"){
            price = 1.00;
        } else if (sugar === "Normal"){
            price = 1.20;
        } else if (sugar === "Extra"){
            price = 1.60;
        }

    } else if (drink === "Tea"){
        if (sugar === "Without"){
            price = 0.50;
        } else if (sugar === "Normal"){
            price = 0.60;
        } else if (sugar === "Extra"){
            price = 0.70;
        }
    }

    if (sugar === 'Without'){
        price *= 0.65;
    }

    if (drink === "Espresso" && numberOfDrink >= 5){
        price *= 0.75;
    }

    let totalSum = numberOfDrink * price

    if (totalSum > 15){
        totalSum *= 0.80;
    }

    console.log(`You bought ${numberOfDrink} cups of ${drink} for ${totalSum.toFixed(2)} lv.`);

}

coffe(["Tea",
"Extra",
"3"])
