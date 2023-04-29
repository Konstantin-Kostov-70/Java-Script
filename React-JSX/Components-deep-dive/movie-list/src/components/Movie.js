import { useEffect, useState } from "react"
import styles from './Movie.module.css'
function Movie({
    id,
    title,
    year,
    director,
    plot,
    posterUrl,
    onMovieDelete,
    onMovieSelect,
    selected
}) {
    const [highlight,setHighLighted] = useState(false)

    const clickHandler = () => {
        setHighLighted(state => !state)
    }
    let style = {}
    if (highlight) {
        style.background = 'blue'
    }
   
    useEffect(() => {
        console.log(`${title} is mounted`)
    },[])

    useEffect(() => {
        console.log(`${title} is updated`)
    },[selected])

    useEffect(() => {
        return () => {
            console.log(`${title} is unmounted`)
        }
    }, [])
    return (
        <li className={styles['li-movie']} style={style} onClick={clickHandler}>
            <h3>{title}, {year}</h3>
            {selected && <h4>Selected</h4>}
            <main>
                <p>{plot}</p>
                <img src={posterUrl} alt={title} />
            </main>
            <footer>
                <h4>director: {director}</h4>
                <button onClick={() => onMovieDelete(id)}>Delete</button>
                <button onClick={() => onMovieSelect(id)}>Select</button>
            </footer>
        </li>
    )
}
export default Movie