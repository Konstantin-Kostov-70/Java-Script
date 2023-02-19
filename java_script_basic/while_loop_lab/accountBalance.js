function account(input){
    let total = 0;
    let data = input[0];
    let index = 1;

    while (data !== "NoMoreMoney"){
        if (Number(data) < 0){
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${Number(data).toFixed(2)}`)
        total += Number(data);
        data = input[index]
        index++;
    }

    console.log(`Total: ${total.toFixed(2)}`)
}

account(["120",
"45.55",
"-150"])

