function pyramid(input){
    let num = Number(input[0]);
    let isBiger = false;
    let counter = 1;
    for (let row = 1; row <= num; row ++){
        let printLinie = '';

        for (let col = 1; col <= row; col ++){
            printLinie += (counter + ' ');
            counter ++;
            if (counter > num){
                isBiger = true
                break;
            }
        }

        console.log(printLinie);
        if (isBiger){
            break;
        }
    }
}

pyramid(["7"])