import { useContext } from "react"
import { GameCard } from "./GameCard"
import { GameContext } from "../../contexts/gameContext"


export const HomePage = () => {
    const {games} = useContext(GameContext)
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are </h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>
                { games.length > 0
                ? games.map((game, idx) =>  <GameCard  key={game.id} game={game}/>)
                : <p className="no-articles">No games yet</p>
                 }
            </div>
        </section>
    )
}