import { useState } from "react"

const getTitles = (count) => {
    switch (count) {
        case 1:
            return 'First Blood'
        case 2:
            return 'Double Kill'
        case 3:
            return 'Triple Kill' 
        case 4:
            return 'Multi Kill'    
        case 5:
            return 'Unstoppable'  
        default:
            return 'Counter'
    }
}

const Counter = () => {
    const [count, setCount] = useState(0)
   
    const addHandler = () => {
        setCount(count + 1)
    }
    const subtractHandler = () => {
        setCount(count - 1)
    }

    const nullHandler = () => {
        setCount(0)
    }
    
    const title = getTitles(count)
    let isNull = count === 0
    
    return (
        <div>
            <p style={{fontSize: Math.max((count / 1.7), 1) + 'rem'}}>{count > 5 ? 'God Luck' : title}: {count}</p>
            {count > 0 ? <button style={{marginRight: "10px"}} onClick={subtractHandler}>-</button> : <button style={{marginRight: "10px"}} disabled={true}>-</button>}
            {!isNull && <button style={{marginRight: "10px"}} onClick={nullHandler}>0</button>}
            {count < 6  ?  <button onClick={addHandler}>+</button> : <button disabled={true}>+</button>}
        </div>
    )
}

export default Counter