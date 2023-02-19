function steps(input){
    let target = 10000;
    let index = 0;
    let totalStep = 0;
    let isTarget = false;

    while(true){
        let data = input[index];

        if (data === "Going home" ){
            totalStep += Number(input[index + 1]);

            if (totalStep >= target){
                isTarget = true;
            }
            break;

        } else {
            totalStep += Number(input[index]);
            if (totalStep >= target){
                isTarget = true
                break;
            }
        }

        index ++;
        
    }
    if(isTarget){
        console.log("Goal reached! Good job!")
        console.log(`${totalStep - target} steps over the goal!`)
            
    } else {
        console.log(`${target - totalStep} more steps to reach goal.`)
    }
}

steps(["125",
"250",
"4000",
"30",
"2678",
"4682"])



