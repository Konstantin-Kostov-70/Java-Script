function solve(num) {
    let divider = []
   for (let index = 1; index < num; index++) {
       if (num % index === 0) {
        divider.push(index)
       }
   }
   let sum = divider.reduce((a, b) => a + b)
   if (sum === num) {
    console.log("We have a perfect number!")
   }
   else {
    console.log("It's not so perfect.")
   }
}

solve(1236498)