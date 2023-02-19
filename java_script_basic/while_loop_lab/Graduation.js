function grad(input){
    let name = input[0];
    let grade = 1;
    let total = 0;
    let lowGrade = 0

    while(grade <= 12){
        let data = Number(input[grade])
        if (data < 4){
            lowGrade += 1;

            if (lowGrade === 2){
                grade -= 1       
                console.log(`${name} has been excluded at ${grade} grade`);
                break;
            }
        }

        total += data;
        grade++;
    }
    
    if (lowGrade < 2){
        let average = (total / 12).toFixed(2);
        console.log(`${name} graduated. Average grade: ${average}`);
    }

}

grad(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])


