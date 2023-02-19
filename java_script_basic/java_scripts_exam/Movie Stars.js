function stars(input){
    let index = 0;
    let budget = Number(input[index]);
    index ++;
    let name = input[index];
    index ++;
    let salary = Number(input[index]);
    index ++;

    budget -= salary
    
    while (budget > 0){
        let command = input[index];
        if (command === 'ACTION'){
            break;
        }
        
       
        index ++;
    }

} 