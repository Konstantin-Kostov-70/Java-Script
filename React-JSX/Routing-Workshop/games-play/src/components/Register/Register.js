import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { registerService } from "../../services/loginService";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {
    const {userLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const [registerError, setRegisterError] = useState('')
    const [registerData, setRegisterData] = useState({
        email: '',
        password: '',
        'confirm-password': ''
    });
    const onSubmit = (ev) => {
        ev.preventDefault();
       
        if (registerData.password !== registerData['confirm-password']) {
            setRegisterError('Passwords do NOT match')
        }
        else {
            const {email, password} = registerData
            registerService(email, password)
            .then(res => {
              userLogin(res)
              navigate('/')
            })
            setRegisterError('')
        }

        setRegisterData({
            email: '',
            password: '',
            'confirm-password': ''
        })

    }

    const onChange = (ev) => {
        setRegisterData(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }))
    }

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        value={registerData.email}
                        onChange={onChange}

                    />
                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        value={registerData.password}
                        onChange={onChange}
                    />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <div className="error">
                        <span>{registerError}</span>
                    </div>
                    <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        value={registerData['confirm-password']}
                        onChange={onChange}
                    />
                    <input className="btn submit" type="submit" value="Register" />
                    <p className="field">
                        <span>
                            If you already have profile click <Link to={'/login'}>here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}
export default Register