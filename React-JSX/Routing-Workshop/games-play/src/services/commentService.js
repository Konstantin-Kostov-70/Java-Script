import * as request  from "./requester"

const BASE_URL = ' http://localhost:3030/data/comments'

export const createComment = (gameId, comment) => request.post(BASE_URL, {gameId, text: comment})
export const getComments = () => request.get(BASE_URL)