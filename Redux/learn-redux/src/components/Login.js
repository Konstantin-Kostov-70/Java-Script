import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user'

function Login() {
  const dispatch = useDispatch()

  return (
    <div className='container'>
      <button className='btn1' onClick={()=> {dispatch(login({name:"Pedro", age: 20, email: "pedro@gmail.com"}))}}>Login</button>
      <button className='btn2' onClick={()=> {dispatch(logout())}}>Logout</button>
    </div>
    
  )
}

export default Login
