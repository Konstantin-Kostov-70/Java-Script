function minLength(pass) {
    if (pass.length >= 6 && pass.length <= 10) {
        return true
    }
    return false
}

function digitLetter(pass) {
    if (pass.match(/^[a-zA-Z0-9]+$/)) {
        return true
    }
    return false
}

function leastTwoDigits(pass) {
    if ((pass.match(/\d/g) || []).length < 2) {
        return false
    }
    return true
}


function solve(pass) {
    let result = []

    if (minLength(pass) && digitLetter(pass) && leastTwoDigits(pass)) {
        return 'Password is valid'
    }

    if (!minLength(pass)) {
        result.push('Password must be between 6 and 10 characters')
    }
    if (!digitLetter(pass)) {
        result.push("Password must consist only of letters and digits")
    }
    if (!leastTwoDigits(pass)) {
        result.push("Password must have at least 2 digits")
    }
    return result.join('\n')
}

console.log(solve('login1'))