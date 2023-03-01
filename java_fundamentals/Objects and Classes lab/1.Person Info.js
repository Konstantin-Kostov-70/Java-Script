function solve(firstName, lastName, age) {
    // person = {}
    // person['firstName'] = firstName
    // person['lastName'] = lastName
    // person['age'] = age

    person = {
       firstName,
       lastName,
       age
    }

    return person
}

console.log(solve("Peter", 
"Pan",
"20"
))