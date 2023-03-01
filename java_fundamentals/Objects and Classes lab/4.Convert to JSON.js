function solve(name, lastName, hairColor ) {
   let person = {
    name,
    lastName,
    hairColor,
   }

   let json = JSON.stringify(person)
   console.log(json)
}

solve('George', 'Jones', 'Brown')