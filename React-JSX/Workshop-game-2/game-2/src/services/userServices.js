const registerUrl = 'http://localhost:8000/users/register/'
const loginUrl = 'http://localhost:8000/api/login/'

export const userRegister = async (data) => {
    const res = await fetch(registerUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await res.json()
    return result
}

export const userLogin = async (data) => {
    const res = await fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await res.json()
    return result
}