import * as request from "./requester"

const BASE_URL = ' http://localhost:3030/users'

export const loginServices = (user) => request.post(`${BASE_URL}/login`, user)

export const logoutServices = async (accessToken) => {
     try {
        const response = await fetch(`${BASE_URL}/logout`, {
            headers: {'X-Authorization': accessToken}
        })
        return response

     } catch (error) {
        console.log(error)
     }
       
}

export const registerService = (email, password) => request.post(`${BASE_URL}/register`, {email, password})

