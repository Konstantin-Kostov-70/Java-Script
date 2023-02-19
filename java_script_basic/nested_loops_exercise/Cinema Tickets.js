function cinema(input) {
    let index = 0;
    let movie = input[index];
    index++;
    let ticket = Number(input[index]);
    let student = 0;
    let kid = 0;
    let standard = 0;
    let total_ticket = 0

    while (movie !== 'Finish') {

        index ++
        let type = input[index]
        let sell_ticket = 0
        
        while (type !== 'End' && type !== 'Finish') {
            sell_ticket ++;

            switch (type) {
                case 'student':
                    student++;
                    break;

                case 'kid':
                    kid++;
                    break;

                case 'standard':
                    standard++;
                    break;
            }
            if (ticket === sell_ticket){
                break;
            }
            index ++;
            type = input[index];
           
        }
        total_ticket += sell_ticket;
        let average = (sell_ticket / ticket) * 100;
        console.log(`${movie} - ${average.toFixed(2)}% full.`);

        if (type === 'Finish'){
            break;
        }

        index++;
        movie = input[index];
       
        index ++;
        ticket = Number(input[index]);
     
    }

    let standartAverage = ((standard / total_ticket) * 100).toFixed(2);
    let kidAverage = ((kid / total_ticket) * 100).toFixed(2);
    let studentAverage = ((student / total_ticket) * 100).toFixed(2);

    console.log(`Total tickets: ${total_ticket}`);
    console.log(`${studentAverage}% student tickets.`);
    console.log(`${standartAverage}% standard tickets.`);
    console.log(`${kidAverage}% kids tickets.`);
}

cinema(["Shutter Island",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Rush",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Deadpool",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Finish"])