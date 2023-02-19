function titles(input){
    let age = Number(input[0]);
    let title = input[1];

    if (title === 'm'){
        if (age < 16){
            console.log('Master');
        } else {
            console.log('Mr.');
        }
    } else {
        if (age < 16){
            console.log('Miss');
        } else {
            console.log('Ms.');

        }
    }
}

titles(["50",
"f"])




