function trade(input){
    let city = input[0];
    let volume = Number(input[1]);
    let comission = 0;

    if (city === 'Sofia'){
        if (0 <= volume && volume <= 500){
            comission = 0.05;
            console.log((comission * volume).toFixed(2));

        } else if (500 < volume && volume <= 1000){
            comission = 0.07;
            console.log((comission * volume).toFixed(2));

        } else if (1000 < volume && volume <= 10000){
            comission = 0.08;
            console.log((comission * volume).toFixed(2));

        } else if (volume > 10000){
            comission = 0.12;
            console.log((comission * volume).toFixed(2));

        } else {
            console.log('error');
        }

    } else if (city === 'Varna'){
        if (0 <= volume && volume <= 500){
            comission = 0.045;
            console.log((comission * volume).toFixed(2));

        } else if (500 < volume && volume <= 1000){
            comission = 0.075;
            console.log((comission * volume).toFixed(2));

        } else if (1000 < volume && volume <= 10000){
            comission = 0.10;
            console.log((comission * volume).toFixed(2));

        } else if (volume > 10000){
            comission = 0.13;
            console.log((comission * volume).toFixed(2));

        } else {
            console.log('error');
        }

    } else if (city === 'Plovdiv'){
        if (0 <= volume && volume <= 500){
            comission = 0.055;
            console.log((comission * volume).toFixed(2));

        } else if (500 < volume && volume <= 1000){
            comission = 0.08;
            console.log((comission * volume).toFixed(2));

        } else if (1000 < volume && volume <= 10000){
            comission = 0.12;
            console.log((comission * volume).toFixed(2))

        } else if (volume > 10000){
            comission = 0.145;
            console.log((comission * volume).toFixed(2))

        } else {
            console.log('error');
        }

    } else {
        console.log('error')
    }
}

trade(["Sofia",
"1500"])
