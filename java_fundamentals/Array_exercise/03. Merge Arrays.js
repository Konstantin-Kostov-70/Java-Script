function solve(array1, array2) {
    newArray = []

    for (let index = 0; index < array1.length; index++) {
        if (index % 2 === 0) {
            newArray.push(Number(array1[index]) + Number(array2[index]))
        }

        else {
            newArray.push(array1[index] + array2[index])
        }       
    }

    console.log(newArray.join(' - '))
}

solve(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)