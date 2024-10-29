import React from 'react'
import { user} from '../../assets'
import {SocialIcons}  from '../../components'

const UserSection = () => {
  return (
    <div className='userSection'>
      <div className='userName'>
        <p className='hello' >Hello !</p>
        <p className='name' > <span>I'm</span> Pradeep</p>
        <svg viewBox="0 0 1320 300">
          <text x="48%" y="28%" textAnchor="middle">
Software Development Engineer          </text>
        </svg>
        <p className='subtext' >
        I’m a dynamic Software Development Engineer with over 2 years of experience in development, specializing in React.js, React Native, and Electron.js. I excel at building high-performance applications, integrating complex APIs, and resolving intricate bugs. I have a proven track record in delivering innovative solutions for Army projects, food apps, and B2B platforms.
          </p>
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
