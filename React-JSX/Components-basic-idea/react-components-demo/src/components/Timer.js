import { useState, } from "react"

const Timer = (props) => {
    let [seconds, setSeconds] = useState(props.sec);
  

    setTimeout(() => {
        setSeconds(seconds + 1)
        // setSeconds(state => state + 1 )
        
    }, 1000);
  
    return (
        <div>
            <p>Timer: {seconds}s</p>
        </div>
    )
}
export default Timer