function yardGreening(input){
    let area = Number(input[0])
    let price = 7.61
    let totalPrice = area * price
    let discount = totalPrice * 0.18
    let finalPrice = totalPrice - discount
    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}

yardGreening(["550"])