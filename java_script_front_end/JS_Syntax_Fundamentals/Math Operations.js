function solve(num1, num2, oper) {
    let res = 0
    switch (oper) {
        case '+':
            res = num1 + num2;
            break;

        case '-':
            res = num1 - num2;
            break;

        case '*':
            res = num1 * num2;
            break;

        case '%':
            if (num2 !== 0) {
                res = num1 % num2;
            }

        case '/':
            if (num2 !== 0) {
                res = num1 / num2;
            }
            break;

        case '**':
            res = num1 ** num2;
            break;
    }

    console.log(res)
}

solve(5, 6, '+')