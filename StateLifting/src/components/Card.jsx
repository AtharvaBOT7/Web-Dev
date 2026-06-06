import React from 'react'

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e) => props.setName(e.target.value)} />
      <p>I am inside Card Component (child): {props.name}</p>

      {props.children}
    </div>
  )
}

export default Card
