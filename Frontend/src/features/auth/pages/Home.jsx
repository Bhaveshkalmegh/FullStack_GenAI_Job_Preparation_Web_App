import React from 'react'
import { useAuth } from '../hooks/useAuth'
const Home = () => {

    const {handleLogout} =useAuth()
  


  return (
    <div>
      <div className="homeContainer">
        <h1>
            Home Page 
        </h1>
        <button className='button ' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Home
