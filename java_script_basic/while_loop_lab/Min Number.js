function minNumber(input){
    let data = input[0];
    let index = 1;
    let minNum = Number.MAX_SAFE_INTEGER;

    while(data !== 'Stop'){
        if (Number(data) < minNum){
            minNum = Number(data);
        }
        data = input[index];
        index++;
    }

    console.log(minNum)

}

minNumber(["100",
"99",
"80",
"70",
"Stop"])
