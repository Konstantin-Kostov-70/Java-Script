function solve(array1) {
    array1.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < array1.length; i++ ) {
       console.log(`${i + 1}.${array1[i]}`);
    }
}

solve(["John", "Bob", "Christina", "Ema"])