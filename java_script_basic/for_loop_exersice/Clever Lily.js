function clever(input){
    let age = Number(input[0]);
    let washMashinePrice = Number(input[1]);
    let toysPrice = Number(input[2]);
    let oddCounter = 0;
    let evenCounter = 0;
    let totalMoney = 0;

    for (let i = 1; i <= age; i++){
        if (i % 2 !== 0){
            oddCounter += 1

        } else {
            evenCounter += 1
            totalMoney += 10 * evenCounter
        }
    }
    totalMoney += ((oddCounter * toysPrice)) - evenCounter
    let difference = totalMoney - washMashinePrice
    
    if (difference >= 0){
        console.log(`Yes! ${difference.toFixed(2)}`)

    } else {
        console.log(`No! ${Math.abs(difference).toFixed(2)}`)
         
    }
}

clever(["21",
"1570.98",
"3"])
