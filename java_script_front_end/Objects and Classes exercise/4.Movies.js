function solve(input) {
    let allObjects = [];

    for (let info of input) {
        if (info.includes('addMovie')) {
           let name = info.split('addMovie ')[1];
            allObjects.push({name});
        }

        else if (info.includes('directedBy')) {
            let name = info.split(' directedBy ')[0];
            let director = info.split(' directedBy ')[1];
            let movie = allObjects.find(movieObject => movieObject.name === name);
            if (movie) {
                movie.director = director
            }            
        }

        else if (info.includes('onDate')) {
            let name = info.split(' onDate ')[0];
            let date = info.split(' onDate ')[1];
            let movie = allObjects.find(movieObject => movieObject.name === name);
            if (movie) {
                movie.date  = date
            }   

        }
    }

    for (movie of allObjects) {
        if (movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date')) {

            console.log(JSON.stringify(movie))
        }
    }

}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )

console.log('--------------------------------------------------------------------')

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    )



    