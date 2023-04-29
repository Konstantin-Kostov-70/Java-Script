import { AddButton } from "./components/AddButton";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import { LoadingSpinner } from "./components/LoadingSpiner";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">

        <section className="todo-list-container">
          <h1>Todo List</h1>
          <AddButton />
          <div className="table-wrapper">
            {/* <LoadingSpinner /> */}

            <TodoList />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
