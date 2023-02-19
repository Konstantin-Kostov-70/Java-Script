function repainting(input){
    let plast = 1.50;
    let paint = 14.50;
    let thinner = 5;
    let plastBags = 0.40;

    let needPlast = Number(input[0]) + 2;
    let needPaint = Number(input[1]) * 1.10;
    let needThinner = Number(input[2]);
    let hours = Number(input[3]);
    
    let totalSum = plast * needPlast + paint * needPaint + thinner * needThinner + plastBags;
    let salary = hours * totalSum * 0.30;

    console.log(totalSum + salary);
}

repainting(["10 ", "11 ", "4 ", "8 "])