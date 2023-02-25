function solve(array1, rotation) {
    rotation %= array1.length
    for (let i = 0; i < rotation; i++) {
        array1.push(array1.shift());
    }

    console.log(array1.join(' '));
}

solve([51, 47, 32, 61, 21], 2)

