const url = 'http://localhost:8000/games/'

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
    const res = await fetch(`${url}${id}`)
    const result = await res.json()
    return result
}

export const deleteOne = async (id) => {
    await fetch(`${url}${id}`, {
        method: 'DELETE',
    })
}

export const createOne = async (data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await res.json()
    return result

}

export const editOne = async (id, data) => {
    const res = await fetch(`${url}${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await res.json()
    return result  
}
