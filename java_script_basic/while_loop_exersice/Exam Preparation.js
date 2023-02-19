function examen(input) {
    let lowGrade = Number(input[0]);
    let index = 1;
    let total = 0;
    let counterAllCase = 0;
    let counterLowGrade = 0;

    while (true) {
        let data = input[index];

        if (data === "Enough") {
            let average = (total / counterAllCase).toFixed(2);

            console.log(`Average score: ${average}`);
            console.log(`Number of problems: ${counterAllCase}`);
            console.log(`Last problem: ${caseName}`);

            break;
        }

        if (index % 2 === 0) {
            let grade = Number(input[index]);
            counterAllCase += 1
            total += grade;

            if (grade <= 4) {
                counterLowGrade += 1;

            }   if (counterLowGrade === lowGrade) {
                    console.log(`You need a break, ${counterLowGrade} poor grades.`);
                    break;
            }

        } else {
            var caseName = input[index];
        }

        index++;

    }
}

examen(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])


