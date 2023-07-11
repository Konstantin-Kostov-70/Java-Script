import { createContext, useEffect, useState } from 'react'
import * as services  from '../services/services'

export const GameContext = createContext();

export const GameProvider = ({
    children
}) => {
  
    const [games, setGames ]= useState([])
    useEffect(() =>{
      services.getAll()
      .then(result => {
        setGames(result)
      })
    },[])

    const addGame = (game) => {
      setGames(games => [...games, game])
    }

    const delGame = (id) => { 
      setGames(state => (state.filter(obj => obj.id !== parseInt(id))))
    }

    return (
      <GameContext.Provider value={{games, delGame, addGame}}>
        {children}
      </GameContext.Provider>
    )
}
