import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    function handleClick(){
        navigate('/about');
    }

  return (
    <div>
      I am Home Page
      <button onClick={handleClick}>
        Go to About Page
      </button>
    </div>
  )
}

export default Home
