function Movie(props) {
   
    return (
        <article>
            <h3>{props.title}</h3>
            <p>year: {props.year}</p>
            <ul>
                <li>Artist: {props.cast[0]}</li>
                <li>Artist: {props.cast[1]}</li>   
            </ul>

        </article>
    )
}
export default Movie