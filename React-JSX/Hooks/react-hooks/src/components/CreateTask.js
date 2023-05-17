import { useState } from 'react'

const CreateTask = ({ taskCreateHandler }) => {
  
    const [task, setTask] = useState('')

    const onChangeHandler = (ev) => {
        setTask(ev.target.value)
    }

    const onSubmit = (ev) => {
        ev.preventDefault()
        taskCreateHandler(task)
        setTask('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="task"
                placeholder="Do dishes"
                value={task}
                onChange={onChangeHandler}
            />
            <button>Add Task</button>
        </form>
    )
}

export default CreateTask