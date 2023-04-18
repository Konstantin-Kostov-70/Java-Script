// function solve(a) {
//     function add (b) { 
//         return a + b
//     }
//     return add
// }


function solve(a) {
    return (b) => { 
        return a + b
    }
}

let myFunc = solve(5) 

 console.log(myFunc(2))
 console.log(myFunc(3))


    

