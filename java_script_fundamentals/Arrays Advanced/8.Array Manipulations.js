function solve(array1) {
   let newArray = array1
   .shift()
   .split(' ')
   .map(x => Number(x));

   for (let commands of array1) {
    commands = commands.split(' ')
    let command = commands[0]

    switch (command) {
        case 'Add':
            var number = Number(commands[1]);
            newArray.push(number);
            break;
        
        case 'Remove':
            var allToRemove = Number(commands[1]);
            newArray = newArray.filter(x => x !== allToRemove);
            break;
           

        case 'RemoveAt':
            var index = Number(commands[1]);
            newArray.splice(index, 1)
            break;

        default:
            number = Number(commands[1])
            index = Number(commands[2])
            newArray.splice(index, 0, number);
            break;
    }
  
   }

   console.log(newArray.join(' '))
 
}

solve(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
)