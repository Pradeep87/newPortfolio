import React from 'react'
import { iconsData } from '../../data/constant'

const Skills = () => {
  return (
    <div className='skills'   >
      <h2 className='h1'>My Skills</h2>
      <div className='text' data-aos="zoom-in-up">
        <p className='bigPara'>As a MERN developer with a focus on mobile app development using React Native and Expo, I possess a diverse range of skills to create exceptional mobile experiences. With proficiency in JavaScript and React Native, I excel in building cross-platform applications that work seamlessly on both iOS and Android devices. I have a deep understanding of Expo, allowing me to leverage its powerful features for rapid development, hot reloading, and easy deployment. Moreover, my expertise extends to integrating APIs, implementing device functionality, and optimizing app performance. With a passion for delivering high-quality and user-friendly mobile apps, I'm committed to bringing your ideas to life.</p>
      </div>

      <div className='skillBoxes' data-aos="zoom-in-up" >
        {iconsData.map((i, idx) => <div key={idx} className='skillBox' data-aos="zoom-in-up" >
          {i.icon}
          <p className='iconName' >{i.name}</p>
        </div>)}
      </div>

    </div>
  )
}

export default Skills