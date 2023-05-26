import * as request  from "./requester"

const BASE_URL = ' http://localhost:3030/data/games'

export const getAll = () => request.get(BASE_URL)

export const createGame = (data) => request.post(BASE_URL, data)

export const getOne = (gameId) => request.get(`${BASE_URL}/${gameId}`)

export const editGame = (gameId, data) => request.put(`${BASE_URL}/${gameId}`, data)

export const deleteGame = (gameId) => request.del(`${BASE_URL}/${gameId}`)
   


