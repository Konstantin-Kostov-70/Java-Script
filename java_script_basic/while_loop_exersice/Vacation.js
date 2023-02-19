function vacation(input) {
    let index = 0;
    let need_money = Number(input[index]);
    index++;
    let current_money = Number(input[index]);
    index ++;
    let action = input[index];
    index ++;
    let amount = Number(input[index]);
    let spend_counter = 0
    let day_counter = 0

    while(current_money < need_money){
        day_counter ++;
        switch(action){
            case 'spend':
                current_money -= amount;
                spend_counter ++;
                if (current_money < 0){
                    current_money = 0
                }
            break;

            case 'save':
                current_money += amount
                spend_counter = 0
                break;
        }

        if (spend_counter === 5){
            break;
        }

        index ++;
        action = input[index]
        index ++;
        amount = Number(input[index])
    
    }

    if (spend_counter === 5){
        console.log("You can't save the money.")
        console.log(`${day_counter}`)

    } else {
          console.log(`You saved the money for ${day_counter} days.`)
    }
}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])





