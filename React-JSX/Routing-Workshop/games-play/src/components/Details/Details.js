import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { GameContext } from "../../contexts/GameContext"

import * as gameService from '../../services/gameService'
import * as commentService from '../../services/commentService'

const Details = () => {
    const navigate = useNavigate()
    const { deleteGameHandler } = useContext(GameContext)
    const { id } = useParams()
    const [game, setGame] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        gameService.getOne(id)
            .then(result => {
                setGame(result)
            })

        commentService.getComments()
            .then(result => {
                setComments(result.filter(obj => obj.gameId === id))
            })
    }, [])

    const onDelete = () => {
        gameService.deleteGame(id)
        deleteGameHandler(id)
        navigate('/catalogue')
    }

    const addCommentHandler = (ev) => {
        ev.preventDefault()
        const formData = new FormData(ev.target)
        const comment = formData.get('comment')

        commentService.createComment(id, comment)
            .then(result => {
                setComments(state => [...state, result])
            })
        
        ev.target.reset() 
    }
 
    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt="img" />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>
                <p className="text">{game.summary}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {comments && comments.length > 0
                            ? comments.map((comment, idx) => (
                                <li key={idx} className="comment">
                                    <p>{comment.text}</p>
                                </li>
                            ))
                            : <p className="no-comment">No comments.</p>
                        }
                    </ul>

                </div>
                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                <div className="buttons">
                    <Link to={`/edit/${id}`} className="button">Edit</Link>
                    <button className="button" onClick={onDelete}>Delete</button>
                </div>
            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>

                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        defaultValue=''

                    />
                    <input
                        className="btn submit"
                        type="submit"
                        value="Add Comment"
                    />
                </form>
            </article>
        </section>
    )
}
export default Details