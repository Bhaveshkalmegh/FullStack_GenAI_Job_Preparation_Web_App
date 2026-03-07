import React from 'react'
import { Link} from 'react-router'
const Login = () => {

    const handleSubmit =(e)=>{
        e.preventDefault()
    }

  return (
  <main>
    <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} >
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="text" className='email' id='email' placeholder='Enter a Email' />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="text" className='password' id = "password" placeholder='Enter a Password'/>
            </div>

            <button className='button primary-button'>Login</button>
        </form>
            <p>Don't had an Account ? <Link to={"/register"}>Register</Link></p>
    </div>
  </main>
)
}

export default Login
