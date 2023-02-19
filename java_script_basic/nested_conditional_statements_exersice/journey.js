function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let total = 0;
    let destination = '';
    let place = '';

    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === 'summer') {
            place = 'Camp';
            total = budget * 0.30;

        } else {
            place = 'Hotel';
            total = budget * 0.70;
        }

    } else if (budget <= 1000) {
        destination = 'Balkans';
        if (season === 'summer') {
            place = 'Camp';
            total = budget * 0.40;

        } else {
            place = 'Hotel';
            total = budget * 0.80;
        }
    } else {
        destination = 'Europe';
        place = 'Hotel';
        total = budget * 0.90;
    }

    console.log(`Somewhere in ${destination}`)
    console.log(`${place} - ${total.toFixed(2)}`)
}

journey(["1500", "summer"])