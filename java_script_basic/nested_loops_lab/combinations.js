function combi(input){
    let num = Number(input[0]);
    let counter = 0;
    for (let x = 0; x <= num; x ++){
        for (let y = 0; y <= num; y ++){
            for (let i = 0; i <= num; i ++){
                let result = x + y + i;
                if (result === num){
                    counter ++;

                }
            }
        }
    }

    console.log(counter)
}

combi(["25"])