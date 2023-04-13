// function solve(num) {
//     let array1 = []
//     for (let i = 0; i < num; i++) {
//         for (let k = 0; k < num; k++) {
//             array1.push(num)
//         }
//         console.log(array1.join(' '))
//         array1 = []
//     }
// }

// solve(7)

function solve(n) {
    let result = new Array(n).fill(new Array(n).fill(n).join(' '))
    console.log(result.join('\n'))
}

solve(6)