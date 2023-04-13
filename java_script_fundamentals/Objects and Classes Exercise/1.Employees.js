function solve(personInfo) {
    let person = {};

    for (let employee of personInfo) {
         person.name = employee;
         person.personalNumber = employee.length;
         console.log(`Name: ${person.name} -- Personal Number: ${person.personalNumber}`)
    }

}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )