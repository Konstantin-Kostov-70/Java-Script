function solve (array1) {
    let modArray = [];
    for (let index = 0; index < array1.length; index++) {
        if (array1[index] % 2 === 0) {
            modArray.push(array1[index] + index)
        }
        else {
            modArray.push(array1[index] - index);
        } 
    }

    let sumOrigin = array1.reduce((x, y) => x + y);
    let sumNew = modArray.reduce((x, y) => x + y);

    console.log(modArray);
    console.log(sumOrigin);
    console.log(sumNew);  
}

solve([5, 15, 23, 56, 35])