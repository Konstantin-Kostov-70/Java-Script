function primeOrNot(input){
    let data = input[0];
    let index = 0;
    let sumPrime = 0;
    let sumNotPrime = 0;

    while(data !== 'stop'){
        index ++;
        let num = Number(data)
        let isNonPrime = false

        if (num === 1){
            sumPrime ++;
            data = input[index];
            continue;
        }

        if (num < 0){
            console.log("Number is negative.")
            data = input[index];
            continue;
        }

        for (let x = 2; x < num; x ++){
            if (num % x === 0){
                isNonPrime = true
                break;
            } 
        }
        if (isNonPrime){
            sumNotPrime += num
        } else {
            sumPrime += num
        }

        data = input[index];
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNotPrime}`);
}

primeOrNot(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])



