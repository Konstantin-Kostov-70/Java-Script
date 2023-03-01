function solve(numbers) {
   let strings = numbers.map(x => String(x).split(''))

   return (strings.map(x => x[0] === x[x.length - 1]).join('\n'))
}

console.log(solve([32,2,232,1010]))






