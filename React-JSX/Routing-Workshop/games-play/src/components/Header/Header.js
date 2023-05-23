import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'


export const Header = () => {
    const { auth } = useContext(AuthContext)
    return (
        <header>
            <h1>
                <Link to={'/'}>GamesPlay</Link>
            </h1>
            <nav>

                <span>{auth.email}</span>
                <Link to={'/catalogue'}>All games</Link>

                {auth.email
                    ? <div id="user">
                        <Link to={'/create_game'}>Create Game</Link>
                        <Link to={'/logout'}>Logout</Link>
                    </div>

                    : <div id="guest">
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/register'}>Register</Link>
                    </div>
                }



            </nav>
        </header>
    )
}