import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/authContext'

export const Header = () => {
    const {auth} = useContext(AuthContext)
    return (
        <header>
            <h1><Link to={'/'} className="home" >GamesPlay</Link></h1>
            <nav>
                {auth.token
                ? <div id="user">
                    <Link to={''}>user {auth.user_info.username}</Link>
                    <Link to={'/catalog'}>All games</Link>
                    <Link to={'/create'}>Create Game</Link>
                    <Link to={'/Logout'}>Logout</Link>
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