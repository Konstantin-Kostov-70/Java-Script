
export const AddButton = () => {

    const onClickHandler = () => {
        const headers = {
            method: "POST",
            body: JSON.stringify({
                text: "Give dog a bath",
                isCompleted: false
            })
        }
        fetch('http://localhost:3030/jsonstore/todos', headers)
            .then(response => response.json())
            .then(result => console.log(result))

    }
    return (
        <div className="add-btn-container">
            <button onClick={() => onClickHandler()} className="btn">+ Add new Todo</button>
        </div>
    )
}