function smallShop(input){
    let item = input[0]
    let city = input[1]
    let quantity = Number(input[2])

    if (city === 'Sofia'){
        if (item === 'coffee'){
            console.log(0.50 * quantity);
        } else if (item === 'water'){
            console.log(0.80 * quantity);
        } else if (item === 'beer'){
            console.log(1.20 * quantity);
        } else if (item === 'sweets'){
            console.log(1.45 * quantity);
        } else {
            console.log(1.60 * quantity);
        }
        
    } else if (city === 'Plovdiv'){
        if (item === 'coffee'){
            console.log(0.40 * quantity);
        } else if (item === 'water'){
            console.log(0.70 * quantity);
        } else if (item === 'beer'){
            console.log(1.15 * quantity);
        } else if (item === 'sweets'){
            console.log(1.30 * quantity);
        } else {
            console.log(1.50 * quantity);
        }
        
    } else {
        if (item === 'coffee'){
            console.log(0.45 * quantity);
        } else if (item === 'water'){
            console.log(0.70 * quantity);
        } else if (item === 'beer'){
            console.log(1.10 * quantity);
        } else if (item === 'sweets'){
            console.log(1.35 * quantity);
        } else {
            console.log(1.55 * quantity);
        }
        
    }
} 

smallShop(["beer",
"Plovdiv",
"2"])


