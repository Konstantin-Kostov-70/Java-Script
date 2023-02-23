function solve(speed, place) {
    let limit = 0;
    let overSpeed = 0;
    let status = '';
    let isOver = false;
    
    switch (place) {
        case 'motorway':
            limit = 130; 
            break;

        case 'interstate':
            limit = 90;
            break;

        case 'city':
            limit = 50;
            break;

        case 'residential':
            limit = 20;
            break;
    }

    if (speed > limit) {
        overSpeed = speed - limit;
        isOver = true;

        if ( overSpeed > 40) {
            status = 'reckless driving';
        }
    
        else if (overSpeed > 20) {
            status = 'excessive speeding';
        }
    
        else {
            status = 'speeding';
        }
    }

    if (isOver) {
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
    else {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
}

solve(40, 'city')
// solve(21, 'residential')
// solve(120, 'interstate')