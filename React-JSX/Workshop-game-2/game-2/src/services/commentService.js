const url = 'http://localhost:8000/comments/'


export const getGameAllComments = async(id) => {
    const res = await fetch(`${url}${id}`)
    const result = await res.json()
    return result
}

export const createComment = async(id, data) => {
    const res = await fetch(`${url}${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    const result = await res.json();
    return result
}