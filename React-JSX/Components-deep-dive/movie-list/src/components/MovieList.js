import Movie from "./Movie"

function MovieList({
    movies,
    onMovieDelete,
    onMovieSelect
}) {
    // const firstMovie = movies[0]
    // '''THIS IS firstMovie ONE OBJECT'''
    // ******************************************************************************************************************
    // const firstMovie = {
    //     "title": "The Cotton Club",
    //     "year": "1984",
    //     "director": "Francis Ford Coppola",
    //     "plot": "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
    // }
    // *****************************************************************************************************************************************************************
    return (
        <ol>
            {/* <Movie {...firstMovie}/>  */}
            {movies.map(movie => <Movie
                key={movie.id}
                {...movie}
                onMovieDelete={onMovieDelete}
                onMovieSelect={onMovieSelect} />)}
        </ol>
    )

}

export default MovieList