function solve(input) {
    let num = input.shift()
    let allPieces = {}
    for (let index = 0; index < num; index++) {
        let [piece, composer, key] = input.shift().split('|');
        allPieces[piece] = {
            composer,
            key
        }
    }
    for(let line of input) {
        if (line === 'Stop') {
            break
        }
        line = line.split('|')
        let command = line[0]
        let piece = line[1]

        switch (command) {
            case 'Add':
                let composer = line[2]
                let key = line[3]
                if (allPieces.hasOwnProperty(piece)) {
                    console.log(`${piece} is already in the collection!`)
                }
                else {
                    allPieces[piece] = {
                        composer,
                        key
                    }
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`)
                }
                break;

            case 'Remove':
                if (allPieces.hasOwnProperty(piece)) {
                    delete allPieces[piece]
                    console.log(`Successfully removed ${piece}!`)
                }
                else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                    break;
        
            default:
                let newKey = line[2]
                if (allPieces.hasOwnProperty(piece)) {
                    allPieces[piece]['key'] = newKey
                    console.log(`Changed the key of ${piece} to ${newKey}!`)
                }
                else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                break;
        }
    }

    for(let piece in allPieces) {
        console.log(`${piece} -> Composer: ${allPieces[piece]['composer']}, Key: ${allPieces[piece]['key']}`)
    }

}

solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)