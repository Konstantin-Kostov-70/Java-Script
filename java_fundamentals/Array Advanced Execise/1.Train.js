function solve(data) {
   let train = data[0]
   .split(' ')
   .map(x => Number(x))
   
   let wagonVolume = Number(data[1])
   let action = data.slice(2)

    for (let el of action) {
        el = el.split(' ');
        if (el.length > 1) {
            let newWagon = Number(el[1]);
            train.push(newWagon);
        }

        else {
            let passengers = Number(el)
            for (let index = 0; index < train.length; index++) {
                if (train[index] + passengers <= wagonVolume) {
                    train[index] += passengers;
                    break;
                }
            }
        }
    }
     console.log(train.join(' '));
}

solve(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)