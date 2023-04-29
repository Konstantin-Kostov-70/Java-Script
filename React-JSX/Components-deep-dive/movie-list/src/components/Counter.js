import { useState, useEffect } from "react"

function Counter() {
    const [count, setCount] = useState(0)
    const addHandler = () => {
        if (count < 5) {

            setCount(state => state + 1)
            setButtonClicked(true)
        }
    }
    const subHandler = () => {
        if (count > 0) {
            setCount(state => state - 1)
            setButtonClicked(false)
        }
    }

    const [text, setText] = useState('')
    const [buttonClicked, setButtonClicked] = useState(false)

    useEffect(() => {
        if (buttonClicked) {
            setText(`1 was added to the count and count is ${count}`)   
        }
        else {
            if (count >= 0) {

                setText(`1 was subtracted from the count and count is ${count}`)
            }
        }

    }, [count])
    return (
        <div>
            <h5>Counter</h5>
            <p>{count}</p>
            <p>{text}</p>
            <button onClick={addHandler}>+</button>
            <button onClick={subHandler}>-</button>
        </div>

    )
}

export default Counter