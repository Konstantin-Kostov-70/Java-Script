// const url = 'http://localhost:3030/data/games'
const url = 'http://localhost:8000/games'

// export const getAll = () => {
//     return fetch(url)
//         .then(res => res.json())
// }

// export const getOne = (id) => {
//     return fetch(`${url}/${id}`)
//         .then(res => res.json())
// }

// export const deleteOne = (id) => {
//     return fetch(`${url}/${id}`, {
//         method: 'DELETE',
//     })
//         .then(res => res.json())
// }

export const getAll = async() => {
    const res = await fetch(url)
    const result = await res.json()
    return result
}

export const getOne = async (id) => {
    const res = await fetch(`${url}/${id}`)
    const result = await res.json()
    return result
}

export const deleteOne = async (id) => {
    const res = await fetch(`${url}/${id}`, {
        method: 'DELETE',
    })
    // const result = await res.json()
    // return result
}

