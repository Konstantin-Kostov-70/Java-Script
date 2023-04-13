function solve(array1, array2) {
    for (x of array1) {
        if (array2.includes(x)) {
            console.log(x)
        }
    }
}

solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)