function solve(cent) {
    let years = cent * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${cent} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes `)
    
}

solve(5)