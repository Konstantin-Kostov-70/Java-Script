// This is example for useReducer, how we can use this hook.We use this
// case only when most be save state.Other case we send request to server and use response data.

import { createContext, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom';
import * as gameService from '../services/gameService';

export const GameContext = createContext();

const gameReducer = (state, action) => {
    switch (action.type) {
     case 'ADD_GAMES':
         return action.payload.map(obj => ({...obj, comments:[]}))
        
    case 'ADD_GAME':
        return [...state, action.payload]

    case 'EDIT_GAME':
        return state.map(obj => obj._id === action.id ? action.payload : obj)

    case 'DELETE_GAME':
        return state.filter(obj => obj._id !== action.id)

     default:
         return state;
    }
 }

export const GameProvider = ({
    children
}) => {

    const [games, dispatch] = useReducer(gameReducer,[]);
    const navigate = useNavigate();

    useEffect(() => {
        gameService.getAll()
            .then(result => {
                dispatch({
                    type: 'ADD_GAMES',
                    payload: result
                })
            })

    }, []);

    const addGame = (game) => {
        dispatch({
            type: 'ADD_GAME',
            payload: game
        })
        navigate('/catalogue')
    }

    const editGameHandler = (id, game) => {
        dispatch({
            type: 'EDIT_GAME',
            payload: game,
            id
        })
    }

    const deleteGameHandler = (id) => {
        dispatch({
            type: 'DELETE_GAME',
            id
        })
        // setGames(state => (state.filter(obj => obj._id !== id)))

    }


    return (
        <GameContext.Provider value={{ addGame, games, editGameHandler, deleteGameHandler }}>
            {children}
        </GameContext.Provider>
    )
}