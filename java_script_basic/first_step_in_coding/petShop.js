function petShop(input){
    let numDogFood = Number(input[0]);
    let numCatFood = Number(input[1]);
    let priceDogFood = 2.50;
    let priceCatFood = 4.00;
    let totalSum = numDogFood * priceDogFood + numCatFood * priceCatFood;

    console.log(`${totalSum} lv.`);
}

petShop(["5 ","4 "])