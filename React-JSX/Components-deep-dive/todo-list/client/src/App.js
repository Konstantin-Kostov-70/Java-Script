import { useEffect, useState } from 'react'
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Spinner } from "./components/Spinner";
import { TodoList } from "./components/TodoList";
import { AddButton } from './components/AddButton';


function App() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(response => response.json())
            .then(result => {
                setData(Object.values(result))
            })
    }, [])

    const onChangeStatus = (todo) => {
        // setData(oldData => oldData.map(x => x._id === todo._id ? ({...x, isCompleted: !x.isCompleted}) : x))
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
                setData(oldData => oldData.map(x => x._id === modifiedData._id ? modifiedData : x))
            })
    }

    const [inputValue, setInputValue] = useState('')

    const onValueHandler = (event) => {
        setInputValue(event.target.value)
    }

   
    const onAddHandler = () => {
        if(inputValue === '') {
            return
        }
       
        const headers = {
            method: 'POST',
            body: JSON.stringify({
                text: inputValue,
                isCompleted: false
            })
        }
        fetch('http://localhost:3030/jsonstore/todos', headers)
        .then(res => res.json())
        .then(result => {
            setData(oldData => [result, ...oldData])
        })
        setInputValue('')
    }

    const onDelete = (id) => {
        const headers = {
            method: 'DELETE',
        }
        console.log(id)
        fetch(`http://localhost:3030/jsonstore/todos/${id}`, headers)
            .then(response => response.json())
            .then(result => { 
                console.log(result)
                console.log(data)
                setData(oldData => oldData.filter(x => x._id !== result._id))
            })
    }

    return (
        <div >
            <Header />

            <main className="main">
                <section className="todo-list-container">
                    <h1>Todo List</h1>

                    <input 
                    className='input' 
                    type="text" 
                    value={inputValue}
                    onChange={onValueHandler} />
                    
                    <AddButton onAddHandler={onAddHandler}/>

                    <div className="table-wrapper">
                        {!data.length && <Spinner />}
                        <TodoList 
                        onChangeStatus={onChangeStatus} 
                        onDelete={onDelete}
                        props={data} />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;