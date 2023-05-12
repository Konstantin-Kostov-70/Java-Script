const BASE_URL = ' http://localhost:3030'

export const getAll = () => {
    return (
        fetch(`${BASE_URL}/data/games`)
            .then(res => res.json())
    )
}