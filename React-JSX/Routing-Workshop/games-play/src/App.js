import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import { useEffect, useState, lazy, Suspense } from 'react';
import { GameProvider } from './contexts/GameContext';
import { AuthProvider } from './contexts/AuthContext';
// import * as gameService from './services/gameService';

import { Header } from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from './components/Login/Login';
import Create from "./components/Create/Create";
import Catalogue from "./components/Catalogue/Catalogue"
import Logout from './components/Logout/Logout';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';

const Register = lazy(() => import('./components/Register/Register'))

function App() {
    // const [games, setGames] = useState([])
    // const navigate = useNavigate()

    // useEffect(() => {
    //     gameService.getAll()
    //         .then(result => {
    //             setGames(result)
    //         })

    // }, [])

    // const addComment = (gameId, comment) => {
    //     setGames(state => {
    //         const game = state.find(obj => obj._id === gameId)
    //         const comments = game.comments || []
    //         comments.push(comment)
    //         return [
    //             ...state.filter(obj => obj._id !== gameId),
    //             { ...game, comments }

    //         ]
    //     })
    // }

    // const addGame = (game) => {
    //     setGames(state => [
    //         ...state,
    //         game
    //     ])
    //     navigate('/catalogue')
    // }

    // const editGameHandler = (game) => {
    //     setGames(state => ([
    //         ...state.filter(obj => obj._id !== game._id),
    //         game
    //     ]))
    // }

    // const deleteGameHandler = (id) => {
    //     setGames(state => (state.filter(obj => obj._id !== id)))

    // }

    return (
        <AuthProvider>
            <div id="box">
                < Header />
                {/* Main Content */}
                <GameProvider>
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
                            <Route path='/details/:id' element={<Details />} />
                            <Route path='/create_game' element={<Create />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/edit/:id' element={<Edit />} />
                        </Routes>
                    </main>
                </GameProvider>
            </div>
        </AuthProvider>
    );
}

export default App;
