import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Speakers from "./components/Speakers";
import Events from "./components/Events";
import Tickets from "./components/Tickets";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <div className="container-fluid">
          <Header />
      </div>
      <div className="container">
        <Events />
        <Speakers />
      </div>
      <Tickets />

      <div className="container">
        <Schedule />
      </div>
      <Footer />
    </div>
  )
}

export default App;
