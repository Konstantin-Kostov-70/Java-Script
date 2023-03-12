function pianist(input) {
    let num = Number(input.shift());
    let collections = {};
    
    for (let i = 0; i < num; i++) {
       let [piece, composer, key] = input.shift().split('|');
       collections[piece] = [composer, key];
    }
    
    let line = input.shift();

    while(line !== 'Stop') {
        line = line.split('|');
        let command = line.shift();
        switch(command) {
            case 'Add':
                let [piece, composer, key] = line;
                if (collections.hasOwnProperty(piece)){
                    console.log(`${piece} is already in the collection!`);
                }
                else {
                    collections[piece] = [composer, key];
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`)
                }
                break;

            case 'Remove':
                let removePiece = line[0];
                if (collections.hasOwnProperty(removePiece)){
                    delete collections[removePiece];
                    console.log(`Successfully removed ${removePiece}!`);
                }
                else {
                    console.log(`Invalid operation! ${removePiece} does not exist in the collection.`)
                }
                break;

            default:
                let[updatePiece, newKey] = line;
                if (collections.hasOwnProperty(updatePiece)){
                    collections[updatePiece][1] = newKey;
                    console.log(`Changed the key of ${updatePiece} to ${newKey}!`);
                }
                else {
                    console.log(`Invalid operation! ${updatePiece} does not exist in the collection.`);
                }
                break;
        
        }

        line = input.shift();
    }

    for(let key in collections) {
        console.log(`${key} -> Composer: ${collections[key][0]}, Key: ${collections[key][1]}`)
    }
}


pianist([
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

