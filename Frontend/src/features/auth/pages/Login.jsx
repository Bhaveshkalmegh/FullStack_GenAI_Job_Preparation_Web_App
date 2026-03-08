import React from 'react'
import { Link} from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { useState } from 'react'
import {useNavigate} from 'react-router'

const Login = () => {
    
    const {loading , handleLogin} = useAuth()
    const navigate = useNavigate()


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async(e)=>{
        e.preventDefault()
        await handleLogin({email,password})
        navigate("/")
    }

    if(loading){
        return(<main>Lodding....</main>)
    }

  return (
  <main>
    <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} >
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    type="text" className='email' id='email' placeholder='Enter a Email' />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                     onChange ={(e)=>{setPassword(e.target.value)}}
                    type="text" className='password' id = "password" placeholder='Enter a Password'/>
            </div>

            <button className='button primary-button'>Login</button>
        </form>
            <p>Don't had an Account ? <Link to={"/register"}>Register</Link></p>
    </div>
  </main>
)
}

export default Login
