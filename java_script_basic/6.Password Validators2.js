function solve(pass) {
    let isValid = true
    let passLength = pass.length

    if (passLength < 6 || passLength > 10) {
        console.log("Password must be between 6 and 10 characters")
        isValid = false
    }

    if (!pass.match(/^[a-zA-Z0-9]+$/)) {
        console.log("Password must consist only of letters and digits")
        isValid = false
    }

    if ((pass.match(/\d/g) || []).length < 2) {
        console.log("Password must have at least 2 digits")
        isValid = false
    }

    if (isValid) {
        console.log('Password is valid')
    }
}

solve('login13')