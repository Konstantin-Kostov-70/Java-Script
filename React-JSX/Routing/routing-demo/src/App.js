import { Routes, Route } from 'react-router-dom'
import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { Pricing } from './components/Pricing';
import { Contacts } from './components/Contacts';
import { NotFound } from './components/NotFound';
import Navigation from './components/Navigation';
import { StarShipsList } from './components/StarShipsList';
import { StarShip } from './components/StarShip';
import { Test } from './components/test';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Hello React Router</h1>
        <Navigation />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/starships' element={<StarShipsList />} />
        <Route path='/starships/:shipId/*' element={<StarShip />} />
        <Route path='/test/:id' element={<Test />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
