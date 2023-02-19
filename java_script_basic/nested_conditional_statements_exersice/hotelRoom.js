function hotelRoom(input){
    let month = input[0];
    let quantity = Number(input[1]);
    let studio = 0;
    let apartment = 0;

    if (month === 'May' || month === 'October'){
        studio = 50;
        apartment = 65

        if (quantity > 7 && quantity <= 14){
            studio *= 0.95

        } else if (quantity > 14){
            studio *= 0.70
            apartment *= 0.90
        }

    } else if (month === 'June' || month === 'September'){
        studio = 75.20
        apartment = 68.70

        if (quantity > 14){
            studio *= 0.80
            apartment *= 0.90
        }

    } else {
        studio = 76
        apartment = 77

        if (quantity > 14){
            apartment *= 0.90
        }

    }

    totalStudio = quantity * studio
    totalApart = quantity * apartment

    console.log(`Apartment: ${totalApart.toFixed(2)} lv.`)
    console.log(`Studio: ${totalStudio.toFixed(2)} lv.`)
}

hotelRoom(["August",
"20"])
