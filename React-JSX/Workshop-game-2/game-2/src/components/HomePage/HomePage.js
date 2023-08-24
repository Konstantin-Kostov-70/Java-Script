import { useContext } from "react"
import { GameCard } from "./GameCard"
import { GameContext } from "../../contexts/gameContext"
import { useNavigate } from "react-router-dom"


export const HomePage = () => {
    const navigate = useNavigate()
    const { games } = useContext(GameContext)

    let  lastGames = ''
    console.log(games);
    try {
        games.reverse()
        lastGames = games.length > 2 ? games.slice(0, 2) : games
    } catch (error) {
       console.error(error);
       navigate("/errors")
    }
    // const lastGames = games.length > 2 ? games.slice(0, 2) : games
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are </h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>
                <div id="home-page-card">
                    {lastGames.length > 0
                        ? lastGames.map((game, idx) => <GameCard key={game.id} game={game} />)
                        : <p className="no-articles">No games yet</p>
                    }
                </div>
            </div>
        </section>
    )
}