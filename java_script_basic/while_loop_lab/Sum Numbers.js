function sum(input){
    let num = Number(input[0]);
    let data = Number(input[1]);
    let totalSum = data;
    let index = 2;

    while(totalSum < num){
        data = Number(input[index]);
        totalSum += data;
        index++;
    }

    console.log(totalSum)

}

sum(["100",
"10",
"20",
"30",
"40"])
