import React from 'react'
import { user, userBackground } from '../../assets'
const UserSection = () => {
  return (
    <div className='userSection'>
      <div className='userBackground'>
        <img src={user} alt="" />
      </div>
      <div className='userName'>
        <p className='name' >John Doe</p>
        <svg viewBox="0 0 1320 300">
          <text x="50%" y="50%" text-anchor="middle">
            MERN Developer
          </text>
        </svg>
        <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur porro ullam eum illo tempora non harum, iure quod eaque nam.</p>
      </div>
    </div>
  )
}

export default UserSection