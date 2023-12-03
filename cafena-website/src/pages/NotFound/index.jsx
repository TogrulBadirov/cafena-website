import React from 'react'
import { useNavigate } from 'react-router-dom';
import './index.scss'
const NotFound = () => {
    const navigate=useNavigate()
    const goToHome=()=>{
        navigate("/")
    }
  return (
    <div id='not_found'>
        <h1>404<span>error</span></h1>
        <p className='error_info'>Something has gone wrong or that page no longer exist</p>
        <button onClick={goToHome} className='go_to_home'>
            <p>Please return to the home page</p>
        </button>


    </div>
  )
}

export default NotFound