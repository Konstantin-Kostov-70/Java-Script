import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect, useState, lazy, Suspense } from 'react';
import uniqid from 'uniqid';
import { GameContext } from './contexts/GameContext';
import { AuthContext } from './contexts/AuthContext';
import * as gameService from './services/gameService';

import { Header } from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import Create from "./components/Create/Create";
import Catalogue from "./components/Catalogue/Catalogue"
import Logout from './components/Logout/Logout';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';

// import Register from './components/Register/Register';

const Register = lazy(() => import('./components/Register/Register'))

function App() {
    const [auth, setAuth] = useState({})
    const [games, setGames] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result)
            })

    }, [])

    const userLogin = (authData) => {
        setAuth(authData)
    }
    const userLogout = () => {
        setAuth({})
    }

    const addComment = (gameId, comment) => {
        setGames(state => {
            const game = state.find(obj => obj._id === gameId)
            const comments = game.comments || []
            comments.push(comment)
            return [
                ...state.filter(obj => obj._id !== gameId),
                { ...game, comments }

            ]
        })
    }

    const addGame = (game) => {
        setGames(state => [
            ...state,
            {
                ...game,
                _id: uniqid()
            }
        ])
        navigate('/catalogue')
    }

    return (
        <AuthContext.Provider value={{auth, userLogin, userLogout}}>
            <GameContext.Provider value={{ games }}>
                <div id="box">
                    < Header />
                    {/* Main Content */}
                    <main id="main-content">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<Login />} />
                            {/* This Route use function lazy() */}
                            <Route path='/register' element={
                                <Suspense>
                                    <Register />
                                </Suspense>
                            } />
                            <Route path='/catalogue' element={<Catalogue />} />
                            <Route path='/details/:id' element={<Details addComment={addComment} />} />
                            <Route path='/create_game' element={<Create addGame={addGame} />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/edit' element={<Edit />} />

                        </Routes>
                    </main>

                    {/* Login Page ( Only for Guest users ) */}

                    {/* Register Page ( Only for Guest users ) */}

                    {/* Create Page ( Only for logged-in users ) */}

                    {/* Edit Page ( Only for the creator )*/}

                    {/*Details Page*/}

                    {/* Catalogue */}

                </div>
            </GameContext.Provider>
        </AuthContext.Provider>

    );
}

export default App;
