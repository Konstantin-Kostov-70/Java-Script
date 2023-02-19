function mySalary(input){
    let num = Number(input[0]);
    let salary = Number(input[1]);

    for (let i = 1; i <= num; i++){
        let tab = input[i + 1]
        switch(tab){
            case "Facebook":
                salary -= 150;break;

            case "Instagram":
                salary -= 100;break;

            case "Reddit":
                salary -= 50;break;
        }

        if (salary <= 0){
            console.log('You have lost your salary.');
            break;
        }
    }

    if (salary > 0){
        console.log(salary)
    }
}

mySalary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])
