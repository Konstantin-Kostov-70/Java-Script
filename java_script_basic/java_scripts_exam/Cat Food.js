function food(input){
    let index = 0;
    let numCat = Number(input[index]);
    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let totalFood = 0;

    for (let num = 0 ; num < numCat; num ++){
        index ++;
        let catFood = Number(input[index])
        totalFood += catFood

        if (100 <= catFood && catFood < 200){
            group1 ++;

        } else if (200 <= catFood && catFood < 300){
            group2 ++;

        } else if (300 <= catFood && catFood < 400){
            group3 ++;
        }

    }

    let totalPrice = (totalFood / 1000) * 12.45

    console.log(`Group 1: ${group1} cats.`)
    console.log(`Group 2: ${group2} cats.`)
    console.log(`Group 3: ${group3} cats.`)
    console.log(`Price for food per day: ${totalPrice.toFixed(2)} lv.`)
}

food(['6',
    '102',
    '236',
    '123',
    '399',
    '342',
    '222'
    ])