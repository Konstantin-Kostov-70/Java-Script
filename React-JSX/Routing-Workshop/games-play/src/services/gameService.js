import * as request  from "./requester"

const BASE_URL = ' http://localhost:3030'

export const getAll = () => request.get(`${BASE_URL}/data/games`)
   


// export const getOne = (id) => {
//     return (
//         fetch(`${BASE_URL}/data/games/${id}`)
//         .then(res => res.json())
//     )
// }