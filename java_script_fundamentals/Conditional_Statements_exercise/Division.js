function bigDivider (input) {
    if (Number(input) % 10 == 0) {
        return `The number is divisible by 10`
    }

    else if (Number(input) % 7 == 0) {
        return `The number is divisible by 7`
    }

    else if (Number(input) % 6 == 0) {
        return `The number is divisible by 6`
    }

    else if (Number(input) % 3 == 0) {
        return `The number is divisible by 3`
    }

    else if (Number(input) % 2 == 0) {
        return `The number is divisible by 2`
    }

    else {
        return 'Not divisible'
    }
} 

console.log(bigDivider(30))