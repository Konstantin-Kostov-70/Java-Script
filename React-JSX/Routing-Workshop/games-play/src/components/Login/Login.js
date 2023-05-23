import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from 'react'
import { loginServices } from "../../services/loginService";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
    const navigate = useNavigate()
    const { userLogin } = useContext(AuthContext)
    const [errorMessage, setErrorMessage] = useState('')
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const onChange = (ev) => {
        setUser(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }))
    }

    const onSubmit = (ev) => {
        ev.preventDefault();

        loginServices(user)
            .then(data => {
                if (data.code === 403) {
                    setErrorMessage(data.message)
                }
                else {
                    setErrorMessage('')
                    userLogin(data)
                    navigate('/')
                }
            })
            .catch((error) => {
                console.log(error)
            })

        setUser({
            email: '',
            password: ''
        })
    }
    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:
                        {errorMessage && <span className="error">{errorMessage}</span>}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                        value={user.email}
                        onChange={onChange}
                    />
                    <label htmlFor="login-pass">Password:
                        {errorMessage && <span className="error">{errorMessage}</span>}
                    </label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        value={user.password}
                        onChange={onChange}
                    />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>
                            If you don't have profile click <Link to={'/register'}>here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}
export default Login