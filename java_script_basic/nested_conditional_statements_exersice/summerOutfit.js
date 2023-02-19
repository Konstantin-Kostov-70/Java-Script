function summerOutfit(input){
    let degrees = Number(input[0])
    let typeOfday = input[1]
    let outfit = '';
    let shoes = '';

    if (10 <= degrees && degrees <= 18){
        if (typeOfday === 'Morning'){
            outfit = 'Sweatshirt'
            shoes = 'Sneakers'

        } else {
            outfit = 'Shirt'
            shoes = 'Moccasins'
        } 

    } else if (18 < degrees && degrees <= 24){
        if (typeOfday === 'Morning' || typeOfday === 'Evening'){
            outfit = 'Shirt'
            shoes = 'Moccasins'

        } else {
            outfit = 'T-Shirt'
            shoes = 'Sandals'

        }

    } else {
        if (typeOfday === 'Morning'){
            outfit = 'T-Shirt'
            shoes = 'Sandals'

        } else if (typeOfday === 'Afternoon'){
            outfit = 'Swim Suit'
            shoes = 'Barefoot'

        } else {
            outfit = 'Shirt'
            shoes = 'Moccasins'
        }
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
} 

summerOutfit(["22",
"Afternoon"])

