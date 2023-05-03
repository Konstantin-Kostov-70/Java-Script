const BASE_URL = 'http://localhost:3005/api/users'

export const getAll = async() => {
    const res = await fetch(BASE_URL)
    const result = await res.json()
    return result.users
}

export const getOne = async(id) => {
    const res = await fetch(`${BASE_URL}/${id}`)
    const result = await res.json()
    return result.user
}

export const createUser = async(obj) => {
    const headers = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
            {
                firstName: obj.firstName,
                lastName: obj.lastName,
                email: obj.email,
                imageUrl: obj.imageUrl,
                phoneNumber: obj.phoneNumber,
                address: {
                  country: obj.country,
                  city: obj.city,
                  street: obj.street,
                  streetNumber: obj.streetNumber
                }
              }
        )
    }
    const res = await fetch(BASE_URL, headers)
    const result = await res.json()
    return result.user
}

export const deleteUser = async(userId) => {
    const res = await fetch(`${BASE_URL}/${userId}`, {method: 'DELETE'})
    const result = await res.json()
    return result
}