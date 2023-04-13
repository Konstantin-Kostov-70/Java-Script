function solve(number) {
   let digits = number.toString().split('');
   let oddSum = 0
   let evenSum = 0

   digits.map(x => x % 2 === 0 ? evenSum += Number(x) : oddSum += Number(x))

   return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}

console.log(solve(1000435))
console.log(solve(3495892137259234))
