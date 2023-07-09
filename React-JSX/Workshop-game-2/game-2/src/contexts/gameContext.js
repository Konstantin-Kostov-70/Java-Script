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

    return (
      <GameContext.Provider value={{games, }}>
        {children}
      </GameContext.Provider>
    )
}
