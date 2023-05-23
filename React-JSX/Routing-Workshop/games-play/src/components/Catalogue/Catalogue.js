import { GameContext } from "../../contexts/GameContext"
import { useContext } from 'react'
import AllGames from "./AllGames/AllGames"


const Catalogue = () => {
  const {games} = useContext(GameContext)
    return (
        <section id="catalog-page">
        <h1>All Games</h1>
        {games.length > 0 
        ? games.map((game) => <AllGames key={game._id} game={game}/>)
        : <h3 className="no-articles">No articles yet</h3>
      }
      </section>
    )
}
export default Catalogue