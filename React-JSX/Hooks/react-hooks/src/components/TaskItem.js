import { useEffect , useContext} from "react"
import { TaskContext } from "../contexts/TaskContext"

const TaskItem = ({task}) => {

    useEffect(() => {
        // console.log('Mount')
    
        return () => {
            // console.log('Unmount');
        }
    },[])

    const {taskRemoveHandler} = useContext(TaskContext)
    
    return (
        <div className="list-item" id={task._id}>
            <li>
                {task.title}
            </li>
            <button onClick={() => taskRemoveHandler(task._id)}>x</button>
        </div>
    )
}
export default TaskItem