
import './App.css';
import Counter from './components/Counter';
import MovieList from './components/MoveList';
import Timer from './components/Timer';

function App() {
  const movies = [{ title: "Man of Steal", year: 2003, cast: ['Henry Cavil', 'Russell Crowe'] },
  { title: "Rocky", year: 1980, cast: ['Silvester Stallone', 'Carl Weathers'] },
  { title: "Harry Potter", year: 2015, cast: ['Daniel Radcliffe', 'Emma Watson'] }]

  return (
    <div className="App">
      <h4>State Demo</h4>
      <Timer sec={0} />
      <Timer sec={30} />
      <Timer sec={60} />
      <p>***************************************************************************</p>
      <h4>Event Demo</h4>
      <Counter />
      <p>***************************************************************************</p>
      <h4>Props Demo</h4>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
