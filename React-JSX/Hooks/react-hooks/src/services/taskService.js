const BASE_URL = 'http://localhost:3030/jsonstore/todos'

export const taskCreate = (task) => {
    return (
        fetch(BASE_URL, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: task
            })
        })
            .then(res => res.json())
    )
}

export const taskDelete = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    })
    return res.json()
}