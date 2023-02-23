function solve(n) {
    for (let i = 0; i < n; i++) {
        for (let k = 0; k < n; k++) {
            for (let l = 0; l < n; l++) {

                let letter1 = String.fromCharCode(97 + i)
                let letter2 = String.fromCharCode(97 + k)
                let letter3 = String.fromCharCode(97 + l)

                console.log(`${letter1}${letter2}${letter3}`)
        
            }
        }
    }
}

solve(2)