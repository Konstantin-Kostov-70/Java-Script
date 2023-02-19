function mania(input) {
    numOfgroup = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;
    let totalPeople = 0;

    for (let i = 1; i <= numOfgroup; i++) {
        let people = Number(input[i]);

        if (people <= 5) {
            musala += people;

        } else if (people <= 12) {
            monblan += people;

        } else if (people <= 25) {
            kilimanjaro += people;

        } else if (people <= 40) {
            k2 += people;

        } else {
            everest += people;
        }

        totalPeople += people;

    }
    console.log(((musala / totalPeople) * 100).toFixed(2) + '%');
    console.log(((monblan / totalPeople) * 100).toFixed(2) + '%');
    console.log(((kilimanjaro / totalPeople) * 100).toFixed(2) + '%');
    console.log(((k2 / totalPeople) * 100).toFixed(2) + '%');
    console.log(((everest / totalPeople) * 100).toFixed(2) + '%');
   
}

mania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])

