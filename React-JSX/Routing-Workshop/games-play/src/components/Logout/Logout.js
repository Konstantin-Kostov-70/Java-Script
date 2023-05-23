import { logoutServices } from "../../services/loginService"
import { useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const Logout = () => {
    const navigate = useNavigate()
    const {auth, userLogout} = useContext(AuthContext)
    useEffect(() => {
        logoutServices(auth.accessToken)
        .then((res) => {
            if (res.status === 204) {
                userLogout()
                navigate('/')
            }
        })
        .catch(() => {
           navigate('/')
        })
    })
   
    return null
}
export default Logout