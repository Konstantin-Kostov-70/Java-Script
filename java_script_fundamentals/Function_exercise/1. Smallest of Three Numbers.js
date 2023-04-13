// function solve(...other) {
//     let numbers = [...other].sort((a, b) => a - b)
//     let smallest = numbers[0]
//     return smallest
// }

// console.log(solve(2,5,3))

 
// function solve(firstNum, secondNum, thirdNum) {
//     let smallest = Math.min(firstNum, secondNum, thirdNum)
//     return smallest
// }

let smallest = (firstNum, secondNum, thirdNum) => Math.min(firstNum, secondNum, thirdNum)

console.log(smallest(2,5,3))