function pupy(input){
    let index = 0;
    let totalFood = Number(input[index]) * 1000;
    index ++;
    let command = input[index]

    while(command !== 'Adopted'){
        let food = Number(command)
        totalFood -= food
        
        index ++;
        command = input[index]
    }

    if (totalFood >= 0){
        console.log(`Food is enough! Leftovers: ${totalFood} grams.`)
    } else {
        console.log(`Food is not enough. You need ${Math.abs(totalFood)} grams more.`)
    }
}

pupy(['4',
    '130',
    '345',
    '400',
    '180',
    '230',
    '120',
    'Adopted'
    ])