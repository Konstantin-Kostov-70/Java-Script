function solve(input) {
    let horses = input.shift().split('|')
    for (let line of input) {
        if (line === 'Finish') {
            break
        }
        line = line.split(' ')
        let command = line[0]
        let horse1 = line[1]

        switch (command) {
            case 'Retake':
                let horse2 = line[2]
                let horse1Index = horses.indexOf(horse1)
                let horse2Idx = horses.indexOf(horse2)
                if (horse1Index < horse2Idx) {
                     horses[horse2Idx] = horse1
                     horses[horse1Index] = horse2
                    console.log(`${horse1} retakes ${horse2}.`)
                }
                break;

            case 'Trouble':
                let position = horses.indexOf(horse1)
                if (position > 0) {
                   horses.splice(position, 1)
                   horses.splice(position - 1 , 0, horse1)
                    console.log(`Trouble for ${horse1} - drops one position.`)
                }
                break;

            case 'Rage':
                let positionIdx = horses.indexOf(horse1)
                if (positionIdx + 2  < horses.length) {
                    horses.splice(positionIdx, 1)
                    horses.splice(positionIdx + 2, 0, horse1)
                    
                }
                else {
                    horses.splice(positionIdx, 1)
                    horses.push(horse1) 
                }
                console.log(`${horse1} rages 2 positions ahead.`)
            
                break;

            default:
                horses.shift(horse1) 
                horses.push(horse1)
                console.log(`What a miracle - ${horse1} becomes first.`)
                break;
        }
    }
    console.log(horses.join('->'));
    console.log(`The winner is: ${horses[horses.length - 1]}`)
}

solve((['Bella|Alexia|Sugar',
    'Retake Alexia Sugar',
    'Rage Bella',
    'Trouble Bella',
    'Finish'])
)