function factorialDivision(num1, num2) {
    let factorial1 = 1;
    for (let i = 2; i <= num1; i++) {
      factorial1 *= i;
    }
  
    let factorial2 = 1;
    for (let i = 2; i <= num2; i++) {
      factorial2 *= i;
    }

    let result = (factorial1 / factorial2).toFixed(2);
    return result
}

console.log(factorialDivision(5, 2))