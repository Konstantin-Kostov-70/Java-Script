function operations(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let operator = input[2];
    let result = 0;

    switch (operator) {
        case '+':
            result = first + second;

            if (result % 2 === 0) {
                console.log(`${first} ${operator} ${second} = ${result} - even`);
            } else {
                console.log(`${first} ${operator} ${second} = ${result} - odd`);
            }
            break;

        case '-':
            result = first - second;

            if (result % 2 === 0) {
                console.log(`${first} ${operator} ${second} = ${result} - even`);
            } else {
                console.log(`${first} ${operator} ${second} = ${result} - odd`);
            }
            break;

        case '*':
            result = first * second;

            if (result % 2 === 0) {
                console.log(`${first} ${operator} ${second} = ${result} - even`);
            } else {
                console.log(`${first} ${operator} ${second} = ${result} - odd`);
            }
            break;

        case '/':
            if (second === 0) {
                console.log(`Cannot divide ${first} by zero`); break;
            } else {
                result = first / second;
                console.log(`${first} / ${second} = ${result.toFixed(2)}`); break;
            }

        case '%':
            if (second !== 0) {
                result = first % second;
                console.log(`${first} % ${second} = ${result}`);
            } else {
                console.log(`Cannot divide ${first} by zero`); 
            }
    }
}

operations(["112",
    "0",
    "/"])
