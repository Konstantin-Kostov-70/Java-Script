const BASE_URL = ' http://localhost:3030'

export const getAll = () => {
    return (
        fetch(`${BASE_URL}/data/games`)
            .then(res => res.json())
    )
}

// export const getOne = (id) => {
//     return (
//         fetch(`${BASE_URL}/data/games/${id}`)
//         .then(res => res.json())
//     )
// }