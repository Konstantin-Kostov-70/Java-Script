function time(input){
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let departHour = Number(input[2]);
    let departMinute = Number(input[3]);
    
    let examTime = examHour * 60 + examMinute;
    let departTime = departHour * 60  + departMinute;
    let difference = examTime - departTime;

    if (difference >= 0 && difference <= 30){
        console.log("On Time");

        if (difference !== 0){
            console.log(`${difference} minutes before the start`);
        }

    } else if (difference < 0){
        console.log("Late");
        difference = Math.abs(difference);

        if (difference < 60){
            console.log(`${difference} minutes after the start`);

        } else {
            departHour = Math.floor(difference / 60);
            departMinute = difference % 60;

            if (departMinute < 10){
                console.log(`${departHour}:0${departMinute} hours after the start`);
            } else {
                console.log(`${departHour}:${departMinute} hours after the start`);
            }    
 
        }

    } else {
        console.log("Early");

        if (difference < 60){ 
        console.log(`${difference} minutes before the start`);

        } else {
            departHour = Math.floor(difference / 60)
            departMinute = difference % 60

            if (departMinute < 10){
                console.log(`${departHour}:0${departMinute} hours before the start`)
            } else{
                console.log(`${departHour}:${departMinute} hours before the start`)

            }
        }

    } 

}

time(["11",
"00",
"8",
"1"])





