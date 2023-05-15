import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
// import * as gameService from '../../services/gameService'

const Details = ({
    games,
    addComment
}) => {
    const { id } = useParams()
    const [gameComment, setGameComment] = useState({
        username: '',
        comment: ''
    })

    const game = games.find(game => game._id === id)

    const [errors, setErrors] = useState({
        username: '',
        comment: ''
    })


    // useEffect(() => {
    //     gameService.getOne(id)
    //         .then(result => {
    //             setGame(result)
    //         })
    // }, [id])

    const addCommentHandler = (ev) => {
        ev.preventDefault()
        addComment(game._id, `${gameComment.username}: ${gameComment.comment}`)
        setGameComment({
            username: '',
            comment: ''
        })

    }

    const onChange = (ev) => {
        setGameComment(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }))
    }
  
    const validateUser = (ev) => {
        let message = ''
        const value = ev.target.value
        if (value.length < 5) {
            message = 'Username must be longer then 5 character'
        }
        else if (value.length > 10) {
            message = 'Username must be shorter then 10 character'
        }
        setErrors(state => ({
            ...state,
            [ev.target.name]: message
        }))
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
                        {game.comments && game.comments.length > 0
                            ? game.comments.map((comment, idx) => (
                                <li key={idx} className="comment">
                                    <p>{comment}</p>
                                </li>
                            ))
                            : <p className="no-comment">No comments.</p>
                        }
                    </ul>

                </div>
                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                <div className="buttons">
                    <Link to={'/edit'} className="button">Edit</Link>
                    <Link className="button">
                        Delete
                    </Link>
                </div>
            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <input
                        type="text"
                        name='username'
                        placeholder='John Dow'
                        value={gameComment.username}
                        onChange={onChange}
                        onBlur={validateUser}
                    />
                    {errors && <div style={{ color: 'red' }}>{errors.username}</div>}

                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        value={gameComment.comment}
                        onChange={onChange}
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