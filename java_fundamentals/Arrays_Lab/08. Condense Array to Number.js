function solve (array1) {
    let condense = []

  while (array1.length > 1) {
    for (let index = 0; index < array1.length - 1; index++) {
        let current = array1[index] + array1[index + 1]; 
        condense.push(current);
    }

    array1 = condense
    condense = []
}


    console.log(array1.join(''));
}

solve([2,10,3])
solve([5,0,4,1,2])
solve([1])