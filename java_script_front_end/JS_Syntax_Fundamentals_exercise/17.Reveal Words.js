function solve (words, text) {
    splitText = text.split(' ')
    words = words.split(', ')

    for (const word of words) {
        for (const searchWord of splitText) {
            if (searchWord.includes('*') && searchWord.length === word.length) {
                text = text.replace(searchWord, word)
            }
        }
    }

    console.log (text)
}


solve('great, learning',
'softuni is ***** place for ******** new programming languages'
)



