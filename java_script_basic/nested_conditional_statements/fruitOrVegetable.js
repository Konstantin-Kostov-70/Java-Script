function fruitOrVegetable(input){
    let fruit = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes'];
    let vegetables = ['tomato', 'cucumber', 'pepper', 'carrot'];
    let item = input[0];

    if (fruit.includes(item)){
        console.log("fruit" );
    } else if (vegetables.includes(item)){
        console.log("vegetable");
    } else {
        console.log("unknown");
    }
}

fruitOrVegetable(["water"])