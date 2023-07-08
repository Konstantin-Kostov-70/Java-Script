import { Header } from "./components/Header/Header";
import { HomePage } from "./components/HomePage/HomePage";


function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <HomePage />
      </main>
    </div>
  );
}

export default App;
