export const TodoItem = ({props, onClick}) => {
   
    return (
        <tr className={props.isCompleted ? "todo is-completed" : "todo"}>
            <td>{props.text}</td>
            <td>{props.isCompleted ? 'Complete' : 'Incomplete'}</td>
            <td className="todo-action">
                <button onClick={() => onClick(props)} className="btn todo-btn">Change status</button>
            </td>
        </tr>
    )
}