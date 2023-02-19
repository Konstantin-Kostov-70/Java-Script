function pool(input){
    let people = Number(input[0]);
    let tax = Number(input[1]);
    let priceChear = Number(input[2]);
    let priceUmbrela = Number(input[3]);

    let totalTax = people * tax;
    let totalUmbrela = Math.ceil(people / 2) * priceUmbrela;
    let totalChear = Math.ceil(people * 0.75) * priceChear;

    let totalSum = totalTax + totalChear + totalUmbrela;

    console.log(`${totalSum.toFixed(2)} lv.`);
}

pool(["100",
"8",
"6",
"4"])

