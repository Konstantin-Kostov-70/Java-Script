function agency(input){
    let city = input[0];
    let equipment = input[1];
    let vip = input[2];
    let days = Number(input[3]);
    let validCity = ["Bansko", "Borovets", "Varna", "Burgas"];
    let validEquipment = ["noEquipment",  "withEquipment", "noBreakfast", "withBreakfast"];
    let price = 0

    if (days <= 0){
        console.log("Days must be positive number!");
    } else if (!validCity.includes(city) || !validEquipment.includes(equipment)){
        console.log("Invalid input!");
    } else {
        if (days > 7){
            days--;
        }
        if (city === 'Bansko' || city === 'Borovets'){
            if (equipment === "withEquipment"){
                price = 100;
                if (vip === 'yes'){
                    price *= 0.90;
                }
            } else {
                price = 80;
                if (vip === 'yes'){
                    price *=0.95;
                }
            }

        
        } else {
            if (equipment === "withBreakfast") {
                price = 130;
                if (vip === 'yes'){
                    price *= 0.88;
                }
            } else {
                price = 100;
                if (vip === 'yes'){
                    price *= 0.93;
                }
            }
        }
        
        let total = days * price;
        console.log(`The price is ${total.toFixed(2)}lv! Have a nice time!`)
        
    } 
}

agency(["Varna",
"withBreakfast",
"no",
"0"])






