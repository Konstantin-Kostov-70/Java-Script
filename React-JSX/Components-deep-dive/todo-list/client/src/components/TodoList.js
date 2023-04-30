export const TodoList = ({
    props,
    onChangeStatus,
    onDelete }) => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>
            <tbody>
                {props.map(todo => (
                    <tr key={todo._id} className={todo.isCompleted ? "todo is-completed" : "todo"}>
                        <td>{todo.text}</td>
                        <td>{todo.isCompleted ? 'Complete' : 'Incomplete'}</td>
                        <td className="todo-action">
                            <button onClick={() => onDelete(todo._id)} className="btn delete-btn">Delete</button>
                            <button onClick={() => onChangeStatus(todo)} className="btn todo-btn">Change status</button>
                        </td>
                    </tr>

                ))}

            </tbody>
        </table>
    )
}