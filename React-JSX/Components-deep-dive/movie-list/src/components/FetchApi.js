import { useEffect, useState } from "react"

const BASE_URL = 'https://swapi.dev/api/people'
const FetchApi = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        // fetch(BASE_URL)
        //     .then(response => response.json())
        //     .then(result => {
        //         setData(result)
        //     })

        const asyncFunc = async () => {
            const res = await fetch(BASE_URL)
            const data = await res.json()
            setData(data.results)
        }
        asyncFunc()

    }, [])
    return (
        <ul>
            {!data.length &&  '...Loading'}
            {data.map(x => (
                <li key={x.name}>{x.name}</li>
            ))}
        </ul>
    )
}
export default FetchApi