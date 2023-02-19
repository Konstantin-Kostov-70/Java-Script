function sum(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let magicNum = Number(input[2]);
    let combination = 0;
    let isFind = false

    for (i = num1; i <= num2; i ++){
        for (x = num1; x <= num2; x ++){
            let result = i + x;
            combination ++;
            if (result === magicNum){
                isFind = true;
                break;

            }
        }
        
        if (isFind){
            break;
        }
    }

    if (isFind){
        console.log(`Combination N:${combination} (${i} + ${x} = ${magicNum})`);

    } else {
        console.log(`${combination} combinations - neither equals ${magicNum}`);
    }

}

sum(["88", 
"888", 
"2000"])





