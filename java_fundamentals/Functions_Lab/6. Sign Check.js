function solve(num1, num2, num3) {
   let counter = 0;
   let numbers = [num1, num2, num3]
   
   numbers.map(x  => x < 0 ? counter++ : counter)
   if (counter % 2 === 0) {
    return 'Positive'
   }
   return 'Negative'  
}

console.log(solve(-6,-12,14))
console.log(solve( 5,12,-15))