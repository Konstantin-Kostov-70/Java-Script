const registerURL = 'http://localhost:8000/users/register/'
const loginURL = 'http://localhost:8000/api/login/'
const logoutURL = 'http://localhost:8000/api/logout/'
export const userRegister = async (data) => {
    const res = await fetch(registerURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await res.json()
    return result
}

export const logUser = async (data) => {
    const res = await fetch(loginURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await res.json()
    return result
}

export const logoutUser = async (token) => {
    const res = await fetch(logoutURL, {
        method: 'POST',
        headers: {
            'Authorization': `Token ${token}`
        },
    })
    return res.status
}