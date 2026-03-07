import React from 'react'
import { Link } from 'react-router'
const Register = () => {

    const handleSubmit= (e)=>{
        e.preventDefault()
    }

  return (
    <main>
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className='usename' id ="username" placeholder='Enter a Username' />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className='Email' id ="Email" placeholder='Enter a Email' />
                </div>
                <div className="input-group">
                    <label htmlFor="Password">Password</label>
                    <input type="text" className='Password' id ="Password" placeholder='Enter a Password' />
                </div>
                
                <button className='button primary-button'>Register</button>
    

            </form>
            <p>Already have an Account <Link to={"/login"}>Login</Link></p>
        </div>
    </main>
  )
}

export default Register
