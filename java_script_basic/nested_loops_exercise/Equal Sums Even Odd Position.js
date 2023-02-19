function position(input){
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let printLinie = '';

    for (let number = firstNum; number <= secondNum; number ++){
        number = number.toString()
        let sumEven = 0;
        let sumOdd = 0;
        for (let index = 0; index < number.length; index ++){
            if (index % 2 === 0){
                sumEven += Number(number[index])
            } else {
                sumOdd += Number(number[index])
            }

        }
        if (sumEven === sumOdd){
            printLinie += number + ' '
        }
    }

    console.log(printLinie)
}

position(["100000",
"100050"])
