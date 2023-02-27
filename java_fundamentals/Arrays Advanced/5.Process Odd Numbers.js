function solve(array1) {
    let new_array = []
   for (let index = 0; index < array1.length; index++) {
      if (index % 2 !== 0) {
          new_array.push(array1[index] * 2)
      }
   }

   console.log(new_array.reverse().join(' '))
}

solve([3, 0, 10, 4, 7, 3])