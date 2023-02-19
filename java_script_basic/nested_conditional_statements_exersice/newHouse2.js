function newHouse(input) {
    let flower = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
    let sumFlower = 0;
    let total = 0;

    switch (flower) {
        case "Roses":
            if (quantity > 80) {
                sumFlower = quantity * 5 * 0.90;
            } else {
                sumFlower = quantity * 5;
            } break;

        case "Dahlias":
            if (quantity > 90) {
                sumFlower = quantity * 3.80 * 0.85;
            } else {
                sumFlower = quantity * 3.80;
            } break;

        case "Tulips":
            if (quantity > 80) {
                sumFlower = quantity * 2.80 * 0.85;
            } else {
                sumFlower = quantity * 2.80;
            } break;

        case "Narcissus":
            if (quantity < 120) {
                sumFlower = quantity * 3 * 1.15;
            } else {
                sumFlower = quantity * 3;
            } break;

        case "Gladiolus":
            if (quantity < 80) {
                sumFlower = quantity * 2.50 * 1.20;
            } else {
                sumFlower = quantity * 2.50;
            } break;

    }

    total = budget - sumFlower

    if (total >= 0) {
        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${total.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${Math.abs(total).toFixed(2)} leva more.`)
    }

}

newHouse(["Tulips",
"88",
"260"])

