import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'

export const StarShipsList = () => {
    const [starShips, setStarShips] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/starships')
        .then(res => res.json())
        .then(result => {
            setStarShips(result.results)         
        })
    }, [])
    return (
        <ul> 
            <li>{!starShips.length && <h3>...load</h3>}</li>
            {starShips.map((x, i) => <li key={x.name}><Link to={`/starships/${i + 1}`}>{x.name}</Link></li>)}
        </ul>
    )
}