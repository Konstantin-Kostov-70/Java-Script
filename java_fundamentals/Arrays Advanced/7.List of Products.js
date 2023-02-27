function solve(array1) {
   array1
   .sort()
   .map((x, index) => console.log(`${index + 1}.${x}`))

    // for (let index = 0; index < array1.length; index++) {
    //     console.log(`${index + 1}.${array1[index]}`)     
    // }
  
}

solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])