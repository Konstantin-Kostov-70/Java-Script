function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let hight = Number(input[index]);
    index++;
    let volume = width * length * hight;
    let data = input[index];

    while (data !== 'Done') {
        volume -= Number(data);
        if (volume <= 0) {
            break;
        }
        index++;
        data = input[index];
    }

    if (volume < 0) {
        console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
    } else {
        console.log(`${volume} Cubic meters left.`);
    }
}

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])


