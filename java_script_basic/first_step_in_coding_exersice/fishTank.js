function fishTank(input){
    let height = Number(input[0]);
    let length = Number(input[1]);
    let width = Number(input[2]);
    let percent = Number(input[3]) / 100;

    let volume = (height * length * width) / 1000;
    let needWater = volume * (1 - percent);
    console.log(needWater);
};

fishTank(["85 ", "75 ", "47 ", "17 "]);

