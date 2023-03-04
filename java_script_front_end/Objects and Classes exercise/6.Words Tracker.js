function solve(array) {
    let tracker = {}
    let searchWords = array.shift().split(' ')

    searchWords.forEach(searchWord => {
        let count = array.filter(currentWord => currentWord === searchWord).length
        tracker[searchWord] = count
    });

    Object
    .keys(tracker)
    .sort((a, b) => tracker[b] - tracker[a])
    .forEach(key => console.log(`${key} - ${tracker[key]}`))
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )

console.log('---------------------')

solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    )