function histogram(input){
    let num = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for ( let i = 1; i <= num; i++){
        let digit = Number(input[i])
        if (digit < 200){
            p1 += 1

        } else if (digit <= 399){
            p2 += 1

        } else if (digit <= 599){
            p3 += 1

        } else if (digit <= 799){
            p4 += 1

        } else {
            p5 += 1

        }
    }

    console.log(((p1 / num) * 100).toFixed(2) + '%')
    console.log(((p2 / num) * 100).toFixed(2) + '%')
    console.log(((p3 / num) * 100).toFixed(2) + '%')
    console.log(((p4 / num) * 100).toFixed(2) + '%')
    console.log(((p5 / num) * 100).toFixed(2) + '%') 
}

histogram(["14",
"53",
"7",
"56",
"180",
"450",
"920",
"12",
"7",
"150",
"250",
"680",
"2",
"600",
"200"])

