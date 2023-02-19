function areaOfFigures(input){
    let shape = input[0];
    if (shape === 'square'){
       let a = Number(input[1]);
       let area = a * a;
       console.log((area).toFixed(3));
    
    } else if (shape === 'rectangle'){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = a * b;
        console.log((area).toFixed(3));
        
    } else if (shape === 'circle'){
        let radius = Number(input[1]);
        let area = Math.PI * radius * radius;
        console.log((area).toFixed(3));

    } else if (shape === 'triangle'){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = (a * b) / 2;
        console.log((area).toFixed(3));
        
    }
}

areaOfFigures(["triangle",
"4.5",
"20"])


