function solve(array1, array2) {
    let isEqual = true;
    let totalSum = 0;
    for(let i = 0; i < array1.length; i++) {
        
        totalSum += Number(array1[i])

        if (array1[i] !== array2[i]) {
            isEqual = false;
            console.log( `Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }

    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${totalSum}`)
    }
}

solve(['10','20','30'], ['10','20','30'])
solve(['1','2','3','4','5'], ['1','2','4','4','5'])
solve(['1'], ['10'])