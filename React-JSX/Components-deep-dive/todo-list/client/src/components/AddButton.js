export const AddButton = ({onAddHandler}) => {
    
    
    return (
        <div className="add-btn-container">
            <button className="btn" onClick={() => onAddHandler()}>+ Add new Todo</button>
        </div>
    )
}