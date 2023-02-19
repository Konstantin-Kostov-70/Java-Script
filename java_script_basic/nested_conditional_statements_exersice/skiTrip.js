function  skiTrip(input){
    let days = Number(input[0]) - 1;
    let typeRoom = input[1];
    let grade = input[2];
    let total = 0;

    switch(typeRoom){
        case "room for one person":
            total = days * 18.00;
            break;

        case "apartment":
            total = days * 25.00;
            if (days < 10){
                total *= 0.70;

            } else if (10 <= days && days <= 15) {
                total *= 0.65;

            } else {
                total *= 0.50;
            }
            break;

        case "president apartment":
            total = days * 35.00
            if (days < 10){
                total *= 0.90;

            } else if (10 <= days && days <= 15) {
                total *= 0.85;

            } else {
                total *= 0.80;
            }
            break;
    }

    if (grade === 'positive'){
        total *= 1.25
    } else {
        total *= 0.90
    }

    console.log(total.toFixed(2))
}

skiTrip(["12",
"room for one person",
"positive"])

