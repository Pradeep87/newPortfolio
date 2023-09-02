import React from 'react'
import { user} from '../../assets'
import {SocialIcons}  from '../../components'

const UserSection = () => {
  return (
    <div className='userSection'>
      <div className='userName'>
        <p className='hello' >Hello !</p>
        <p className='name' > <span>I'm</span> Pradeep Rajput</p>
        <svg viewBox="0 0 1320 300">
          <text x="28%" y="28%" textAnchor="middle">
            Web Developer
          </text>
        </svg>
        <p className='subtext' >I'm a skilled web developer specializing in creating dynamic and user-friendly websites. With a keen eye for design and a passion for coding, I bring creativity and functionality together to deliver exceptional online experiences.</p>
        <div className="homeIcons">
        <SocialIcons/>
        </div>
      </div>
      <div className='userBackground'>
        <img src={user} alt="" />
      </div>
    </div>
  )
}

export default UserSection