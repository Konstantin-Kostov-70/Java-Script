function solve(fruit, weight, price) {
    weight /= 1000
    let total = weight * price
    console.log(`I need $${total.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80)