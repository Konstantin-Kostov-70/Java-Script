import { TodoItem } from "./TodoItem"
import { useEffect, useState } from 'react'

export const TodoList = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
    }, [])

    const todoClickHandler = (todo) => {
        const headers = {
            method: 'PUT',
            body: JSON.stringify({
                _id: todo._id,
                text: todo.text,
                isCompleted: !todo.isCompleted
            })
        }
        fetch(`http://localhost:3030/jsonstore/todos/${todo._id}`, headers)
            .then(response => response.json())
            .then(modifiedData => {
                setData(oldData => Object.values(oldData).map(x => x._id === modifiedData._id ? modifiedData : x));
            })
       
    }
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
                {Object.values(data).map(props => (<TodoItem
                    key={props._id}
                    props={props}
                    onClick={todoClickHandler} />))}

            </tbody>
        </table>
    )
}