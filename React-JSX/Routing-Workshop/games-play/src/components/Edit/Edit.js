import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useContext, useState } from "react";
import * as gameServices from '../../services/gameService'
import { GameContext } from "../../contexts/GameContext";

const Edit = () => {
    const navigate = useNavigate()
    const { editGameHandler } = useContext(GameContext)
    const [currentGame, setCurrentGame] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
    })
    const { id } = useParams()
    useEffect(() => {
        gameServices.getOne(id)
            .then(game => setCurrentGame({
                title: game.title,
                category: game.category,
                maxLevel: game.maxLevel,
                imageUrl: game.imageUrl,
                summary: game.summary
            }))
    }, [])

    const onSubmit = (ev) => {
        ev.preventDefault();

        gameServices.editGame(id, currentGame)
            .then(result => editGameHandler(result))
        
            navigate(`/details/${id}`)
    }

    const onChange = (ev) => {
        setCurrentGame(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }))
    }

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={currentGame.title}
                        onChange={onChange}
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={currentGame.category}
                        onChange={onChange}
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        value={currentGame.maxLevel}
                        onChange={onChange}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={currentGame.imageUrl}
                        onChange={onChange}
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        value={currentGame.summary}
                        onChange={onChange}
                    />
                    <input className="btn submit" type="submit" value="Edit Game" />
                </div>
            </form>
        </section>
    )
}
export default Edit