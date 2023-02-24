function solve(word, text) {
    text = text.split(' ')
    let isNotFound = true

    for (const elem of text) {
        if (elem.toLowerCase() === word) {
            console.log(word)
            isNotFound = false
        }
    }

    if (isNotFound) {
        console.log(`${word} not found!`)
    }
}

solve('javascript',
'JavaScript is the best programming language'
)
solve('python',
'JavaScript is the best programming language'
)