import React, { useState } from 'react'
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'

const Register = () => {
    const navigate = useNavigate()
    
    const {loading ,handleRegister }=useAuth()
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const handleSubmit= async(e)=>{
        e.preventDefault()
        await handleRegister({username,email,password})
        navigate("/")
    }
    if(loading){
        return(<main><h1>Loding...</h1></main>)
    }

  return (
    <main>
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input 
                    onChange={(e)=>{setUsername(e.target.value)}}
                    type="text" className='usename' id ="username" placeholder='Enter a Username' />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    type="text" className='Email' id ="Email" placeholder='Enter a Email' />
                </div>
                <div className="input-group">
                    <label htmlFor="Password">Password</label>
                    <input 
                    onChange={(e)=>{setPassword(e.target.value)}}
                    type="text" className='Password' id ="Password" placeholder='Enter a Password' />
                </div>
                
                <button className='button primary-button'>Register</button>
    

            </form>
            <p>Already have an Account <Link to={"/login"}>Login</Link></p>
        </div>
    </main>
  )
}

export default Register
