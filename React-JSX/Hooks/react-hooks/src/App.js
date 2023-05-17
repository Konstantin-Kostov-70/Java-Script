import "./App.css";
import { TaskContext } from './contexts/TaskContext';
import { useFetch } from './hooks/useFetch';
import * as services from './services/taskService';
import TaskList from "./components/TaskList";
import CreateTask from "./components/CreateTask";

function App() {
    const BASE_URL = 'http://localhost:3030/jsonstore/todos';
    const [tasks, setTasks, isLoading] = useFetch(BASE_URL, []);
    
    const taskCreateHandler = (task) => {
        if (!task) {
            return
        }
        services.taskCreate(task)
            .then(result => {
                setTasks(state => [
                    ...state,
                    { ...result }
                ])
            })
    }

    const taskRemoveHandler = (taskId) => {
        services.taskDelete(taskId)
        setTasks(state => state.filter(obj => obj._id !== taskId))
    }

    return (
        <TaskContext.Provider value={{taskRemoveHandler}}>
            <div className='site-wrapper'>
                <header>
                    <h1>TODO App</h1>
                </header>
                <main>
                    {isLoading
                        ? <TaskList tasks={tasks} />
                        :
                        <h3>Loading...</h3>
                    }
                    <CreateTask taskCreateHandler={taskCreateHandler} />
                </main>
            </div>
        </TaskContext.Provider>
    );
}

export default App;
