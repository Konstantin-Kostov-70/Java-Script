function sumOfSeconds(input){
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);

    let allSecond = first + second + third;
    let minutes = Math.floor(allSecond / 60);
    let seconds = allSecond % 60;

    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`);

    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

sumOfSeconds(["22", "7", 
"34"]);


