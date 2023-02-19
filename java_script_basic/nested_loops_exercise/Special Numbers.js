function special(input){
    num = Number(input[0])
    let linie = ''

    for (let x = 1; x <= 9; x ++){
        for (let y = 1; y <= 9; y ++){
            for (let z = 1; z <= 9; z ++){
                for (let k = 1; k <= 9; k ++){

                    if (num % x === 0 && num % y === 0 && num % z === 0 && num % k === 0){

                        let number = `${x}${y}${z}${k}`
                        linie += number + ' '
                    }
                }
            }
        }
    }

    console.log(linie)
}

special(["3"])