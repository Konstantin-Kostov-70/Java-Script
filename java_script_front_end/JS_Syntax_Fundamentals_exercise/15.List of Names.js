function solve(array1) {
    let sorted = [...array1]
    .sort((a, b) => a.localeCompare(b))
    .map((name, index) => `${index + 1}.${name}`)
    .join('\n')

    console.log(sorted)

    // for (let i = 0; i < array1.length; i++ ) {
    //    console.log(`${i + 1}.${array1[i]}`);
    // }
}

solve(["John", "Bob", "Christina", "Ema"])

