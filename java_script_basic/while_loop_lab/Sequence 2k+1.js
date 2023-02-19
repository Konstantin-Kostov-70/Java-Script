function seq(input){
    let num = Number(input[0]);
    let seqNumbers = 1;

    while(seqNumbers <= num){
        console.log(seqNumbers)
        seqNumbers = (seqNumbers * 2) + 1;
    }
}

seq(["3"])