function solve(array1) {
   let newArray = array1
   .sort((a, b) => a - b)
   .slice(0, 2)
   .join(' ')

   console.log(newArray)
}

solve([30, 15, 50, 5])

