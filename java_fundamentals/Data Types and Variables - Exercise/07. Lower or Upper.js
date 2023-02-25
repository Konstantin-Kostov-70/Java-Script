function solve(letter) {
    let result = letter.charCodeAt(0)
    if (result >= 97 && result <= 122) {
        console.log('lower-case')
    }

    else if (result >= 65 && result <= 90) {
        console.log('upper-case')
    }
}

solve('l')