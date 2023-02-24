function vacation(num, type, day) {
    let price = 0
    let totalSum = 0
    
    switch (type) {
        case 'Students':

            if (day == 'Friday'){
                price = 8.45
                totalSum = price * num
            }

            else if (day == 'Saturday'){
                price = 9.80
                totalSum = price * num
            }

            else if (day == 'Sunday'){
                price = 10.46
                totalSum = price * num
            }

            if (num >= 30) {
                totalSum *= 0.85
            }
            break;

        case 'Business':
            if (num >= 100) {
                num -= 10
            }

            if (day == 'Friday'){
                price = 10.90
                totalSum = price * num
            }

            else if (day == 'Saturday'){
                price = 15.60
                totalSum = price * num
            }

            else if (day == 'Sunday'){
                price = 16
                totalSum = price * num
            }

            break;

        case 'Regular':
            if (day == 'Friday'){
                price = 15
                totalSum = price * num
            }

            else if (day == 'Saturday'){
                price = 20
                totalSum = price * num
            }

            else if (day == 'Sunday'){
                price = 22.50
                totalSum = price * num
            }

            if (num >= 10 && num <= 20) {
                totalSum *= 0.95
            }

            break;
    }

    console.log(`Total price: ${totalSum.toFixed(2)}`)

}

vacation(40,
    "Regular",
    "Saturday"
    )