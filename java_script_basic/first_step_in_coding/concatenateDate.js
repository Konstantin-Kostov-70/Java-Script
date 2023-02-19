function concatenateDate(input){
    let firstName = input[0];
    let lasttName = input[1];
    let age = Number(input[2]);
    let city = input[3];
    console.log(`You are ${firstName} ${lasttName}, a ${age}-years old person from ${city}.`);
};

concatenateDate(['Petar', 'Petrov', '24', 'Sofia']);