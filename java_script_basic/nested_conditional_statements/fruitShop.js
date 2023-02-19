function fruitShop(input) {
    let fruit = input[0]
    let day = input[1]
    let quantity = Number(input[2])
    let totalSum = 0
    let isInvalid = false

    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
        if (fruit === 'banana') {
            totalSum = 2.50 * quantity;

        } else if (fruit === 'apple') {
            totalSum = 1.20 * quantity;

        } else if (fruit === 'orange') {
            totalSum = 0.85 * quantity

        } else if (fruit === 'grapefruit') {
            totalSum = 1.45 * quantity

        } else if (fruit === 'kiwi') {
            totalSum = 2.70 * quantity

        } else if (fruit === 'pineapple') {
            totalSum = 5.50 * quantity

        } else if (fruit === 'grapes') {
            totalSum = 3.85 * quantity

        } else {
            isInvalid = true
        }

    } else if (day === 'Saturday' || day === 'Sunday') {
        if (fruit === 'banana') {
            totalSum = 2.70 * quantity

        } else if (fruit === 'apple') {
            totalSum = 1.25 * quantity

        } else if (fruit === 'orange') {
            totalSum = 0.90 * quantity

        } else if (fruit === 'grapefruit') {
            totalSum = 1.60 * quantity

        } else if (fruit === 'kiwi') {
            totalSum = 3.00 * quantity


        } else if (fruit === 'pineapple') {
            totalSum = 5.60 * quantity

        } else if (fruit === 'grapes') {
            totalSum = 4.20 * quantity

        } else {
            isInvalid = true
        }

    } else {
        isInvalid = true

    } if (isInvalid) {
        console.log('error')

    } else {
        console.log(totalSum.toFixed(2))
    }
}



fruitShop(["kiwi",
    "Monday",
    "2.5"])




