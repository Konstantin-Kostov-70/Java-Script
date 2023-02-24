function solve(array1, step) {
   let newArray = []
   for (let i = 0; i < array1.length; i += step) {
       newArray.push(array1[i])
   }
   
   return newArray
}

console.log(solve(['5', 
'20', 
'31', 
'4', 
'20'], 
2
))