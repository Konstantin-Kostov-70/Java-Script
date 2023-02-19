function cinema(input){
    let typeMovie = input[0];
    let rows = Number(input[1]);
    let colums = Number(input[2]);
    let seats = rows * colums;
    let total = 0;

    switch(typeMovie){
        case 'Premiere':
            total = (seats * 12).toFixed(2);break;

        case 'Normal':
            total = (seats * 7.50).toFixed(2);break;

        case 'Discount':
            total = (seats * 5).toFixed(2);break;

    } 

    console.log(total)

}

cinema(["Normal",
"21",
"13"])
