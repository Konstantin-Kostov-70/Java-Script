import { useState } from 'react'
import MovieList from './components/MovieList';
import './App.css';
import { movies as movieData } from './movies';
import Numbers from './components/Numbers';
import Counter from './components/Counter';
import FetchApi from './components/FetchApi';

function App() {
  const numbers = [1, 2, 3, 4]

  const [movies, setMovie] = useState(movieData)
  const onMovieDelete = (id) => {
    setMovie(state => state.filter(x => x.id !== id))
  }
  const onMovieSelect = (id) => {
    setMovie(state => state.map(x => ({...x, selected: x.id === id})))
  }
  return (
    <div className="App">
      <h2>Fetch Api demo</h2>
      <FetchApi />
      <h2>Use effect demo</h2>
      <Counter />
      <h2>Numbers demo</h2>
      <Numbers numbers={numbers} />
      <h1>Movie collection</h1>
      <MovieList
        movies={movies.slice(0, 10)}
        onMovieDelete={onMovieDelete}
        onMovieSelect={onMovieSelect} />
    </div>
  );
}

export default App;
