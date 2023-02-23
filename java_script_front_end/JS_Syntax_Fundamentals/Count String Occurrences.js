function solve(text, word) {
    text = text.split(' ')
    let counter = 0

    // for (x of text) {
    //     if (x === word) {
    //         counter++
    //     }
    // }

    newText.map(x => x === word ? counter++ : x)
    
    console.log(counter)
}

solve('This is a word and it also is a sentence',
'is'
)

solve('softuni is great place for learning new programming languages',
'softuni'
)