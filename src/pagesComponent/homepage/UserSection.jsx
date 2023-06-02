import React from 'react'
import { user} from '../../assets'
import {SocialIcons}  from '../../components'
const UserSection = () => {
  return (
    <div className='userSection'>
      <div className='userBackground'>
        <img src={user} alt="" />
      </div>
      <div className='userName'>
        <p className='name' >Pradeep Rajput</p>
        <svg viewBox="0 0 1320 300">
          <text x="50%" y="50%" text-anchor="middle">
            MERN Developer
          </text>
        </svg>
        <p style={{textAlign:"center"}}>I'm a skilled web developer specializing in creating dynamic and user-friendly websites. With a keen eye for design and a passion for coding, I bring creativity and functionality together to deliver exceptional online experiences.</p>
        <div className="homeIcons">
        <SocialIcons/>
        </div>
      </div>
    </div>
  )
}

export default UserSection