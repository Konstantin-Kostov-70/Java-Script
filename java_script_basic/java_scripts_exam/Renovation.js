function renovation(input){
    let index = 0;
    let height = Number(input[index]);
    index ++;
    let width = Number(input[index]);
    index ++;
    let percent = Number(input[index]) / 100;
    let total = Math.ceil(height * width * 4 * (1 - percent));

    index ++;
    let command = input[index];

    while(command !== 'Tired!'){
        let liter = Number(command);
        total -= liter

        if (total === 0){
            console.log("All walls are painted! Great job, Pesho!")
            break;
        } else if (total < 0) {
            console.log(`All walls are painted and you have ${Math.abs(total)} l paint left!`);
            break
        }

        index ++;
        command = input[index]
    }

    if (total > 0){
        console.log(`${total} quadratic m left.`)
    }
}

renovation(["2",
"3",
"25",
"6",
"7",
"8"])
