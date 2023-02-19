function maxNumber(input){
    let data = input[0];
    let index = 1;
    let maxNum = Number.MIN_SAFE_INTEGER;

    while(data !== 'Stop'){
        if (Number(data) > maxNum){
            maxNum = Number(data);
        }
        data = input[index];
        index++;
    }

    console.log(maxNum)

}

maxNumber(["-10",
"20",
"-30",
"Stop"])

