function solve(arr) {
   let sortedArr = arr
   .sort((a, b) => a - b)
   
   let newArr = []

   while (sortedArr.length > 0) {
    newArr.push(sortedArr.pop())
    newArr.push(sortedArr.shift())
   
   }

   console.log(newArr.join(' '))
   
}

solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])