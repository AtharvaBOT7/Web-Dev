import React from 'react'
import opimg from '../assets/opimg.jpg'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img src={opimg} alt="Noobie image" id='user-img'/>
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
