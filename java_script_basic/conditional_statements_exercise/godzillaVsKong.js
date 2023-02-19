function godzillaVsKong(input){
    let budget = Number(input[0])
    let numStatist = Number(input[1])
    let pricePerStatist = Number(input[2])

    let decor = budget * 0.10
    let clothes = numStatist * pricePerStatist

    if (numStatist > 150){
        clothes *= 0.90
    }

    let total = budget - (decor + clothes)

    if (total < 0){
        console.log("Not enough money!")
        console.log(`Wingard needs ${Math.abs(total).toFixed(2)} leva more.`)
        
    } else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${total.toFixed(2)} leva left.`)
     
    }  


}

godzillaVsKong(["15437.62",
"186",
"57.99"])


