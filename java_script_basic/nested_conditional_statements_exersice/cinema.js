function cinema(input){
    let typeMovie = input[0]
    let rows = Number(input[1])
    let colums = Number(input[2])
    let seats = rows * colums
    let total = 0

    if (typeMovie === 'Premiere'){
        total = (seats * 12).toFixed(2)

    } else if (typeMovie === 'Normal'){
        total = (seats * 7.50).toFixed(2)

    } else if (typeMovie === 'Discount'){
        total = (seats * 5).toFixed(2)
    }

    console.log(total)
}

cinema(["Premiere",
"10",
"12"])
