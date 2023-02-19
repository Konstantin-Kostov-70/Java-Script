function depositCalculator(input){
    let deposit = Number(input[0]);
    let term = Number(input[1]);
    let percentPerYear = Number(input[2]) / 100;

    let totalSum = deposit + term * ((deposit * percentPerYear) / 12);
    console.log(totalSum);
}

depositCalculator(["200 ", "3 ", "5.7 "]);

