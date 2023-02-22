import React from 'react'
import { user, userBackground } from '../../assets'
const UserSection = () => {
  return (
    <div className='userSection'>
      <div className='userBackground'>
        <img src={user} alt=""  />
        <div className='userName'>
        <p>john doe</p>
        <h1>MERN Developer</h1>
        </div>
      </div>

    </div>
  )
}

export default UserSection