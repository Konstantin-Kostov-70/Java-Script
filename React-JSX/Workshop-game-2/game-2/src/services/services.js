const url = 'http://localhost:3030/data/games'
// const url = 'http://localhost:8000/games'

// export const getAll = () => {
//    fetch(url)
//    .then(response => {
//     if (response.ok) {
//         return response.json()
//     }
//     else {
//         throw new Error('Request failed with status: ' + response.status);
//     }
//    })

// }

export const getAll = async() => {
    const res = await fetch(url)
    const result = await res.json()
    return result
}

export const getOne = async(id) => {
    const res = await fetch(`${url}/${id}`)
    const result = await res.json()
    return result
}

export const deleteOne = async(id) => {
    const res = await fetch(`${url}/${id}`, {
        method: 'DELETE',
    })
    const result = await res.json()
    return result
}

