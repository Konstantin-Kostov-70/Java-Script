function foodDelivery(input){
    let chickenMenu = 10.35;
    let fishMenu = 12.40;
    let veganMenu = 8.15;
    let delivery = 2.50;

    let numChickenMenu = Number(input[0]);
    let numFishMenu = Number(input[1]);
    let numVeganMenu = Number(input[2]);

    let totalSum = chickenMenu * numChickenMenu + fishMenu * numFishMenu + veganMenu * numVeganMenu;
    let desert = totalSum * 0.20;
    let finalSum = totalSum + desert + delivery;

    console.log(finalSum);
}

foodDelivery(["2 ", "4 ", "3 "])