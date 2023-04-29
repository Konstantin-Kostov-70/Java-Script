// function Numbers(props) {
//     return (
//         <ul>
//             {props.numbers.map((num) => <li>{num}</li>)}
//         </ul>
//     )  
// }

function Numbers({numbers}) {
    return (
        <ul>
            {numbers.map((num) => <li key={num}>{num}</li>)}
        </ul>
    )  
}

export default Numbers