function train(input){
    let index = 0;
    let num = Number(input[index]);
    index ++;
    let data = input[index];
    let gradesCounter = 0
    let sumAllGrades = 0

    while (data !== 'Finish'){
        let presentation = data;
        index ++;
        let average = 0;
        
        for (let i = index; i < index + num; i ++){
            let grade = Number(input[i]);
            gradesCounter ++;
            sumAllGrades += grade
            average += grade
        }
        average /= num
        console.log(`${presentation} - ${average.toFixed(2)}.`)

        index += num;
        data = input[index]
    }

    let totalAverage = (sumAllGrades / gradesCounter).toFixed(2)
    console.log(`Student's final assessment is ${totalAverage}.`)

}

train(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


