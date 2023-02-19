function cake(input){
    let index = 0;
    let length = Number(input[index]);
    index ++;

    let width = Number(input[index]);
    let cake = length * width
    index ++;

    let data = input[index];

    while(data !== 'STOP'){
        if (cake < 0){
            break;
        }

        cake -= Number(data);
        index ++;
        data = input[index];
    }

    if (cake < 0){
        console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`);

    } else {
        console.log(`${cake} pieces are left.`);
    }
}

cake (["10",
"2",
"2",
"4",
"6",
"STOP"])

