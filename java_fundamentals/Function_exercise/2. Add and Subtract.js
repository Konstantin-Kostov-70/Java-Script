// function solve(...other) {
//     let numbers = [...other]
//     let result = (numbers[0] +  numbers[1]) - numbers[2]
//     return result
// }

// console.log(solve(23,6,10))

// -----------------------------------------------------------------

// let subtract = (a, b, c) => (a + b) - c

// console.log(subtract(23,6,10))
// console.log(subtract(1,17,30))
// console.log(subtract(42,58,100))

// ------------------------------------------------------------------

let solve = (firstNum, secondNum, thirdNum) => {
    let sum = (a, b) => a + b;
    let subtract = (mySum, c) => mySum - c;

    return subtract(sum(firstNum, secondNum), thirdNum);
}

console.log(solve(23,6,10));
console.log(solve(1,17,30));
console.log(solve(42,58,100));