
function solve(n) {
    counter = n
    function closure(a) {
        counter += a
        console.log(counter)
    }
    return closure
    // closure(2)
    // closure(2)
    // closure(2)
    // closure(2)
    // closure(2)
}

const myAdd = solve(5)
myAdd(2)
myAdd(2)
myAdd(2)
myAdd(2)
myAdd(2)







