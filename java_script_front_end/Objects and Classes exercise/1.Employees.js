function solve(personInfo) {
    let person = {};

    for (const employee of personInfo) {
         person[employee] = employee.length;
    }

    for (const key in person) {
        console.log(`Name: ${key} -- Personal Number: ${person[key]}`)
    }

}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )