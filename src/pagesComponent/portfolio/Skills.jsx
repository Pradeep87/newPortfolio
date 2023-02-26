import React from 'react'
import { iconsData } from '../../data/constant'








const Skills = () => {
  return (
    <div className='portfolioSection'>
      <div className='myWork'>
        <h2 className='h1'>My Skills</h2>
        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi, est rerum mollitia nemo quod excepturi provident dolore ipsa! Molestias distinctio voluptatem nesciunt. Architecto quibusdam quisquam voluptatibus temporibus natus corporis culpa numquam dicta fugiat tempora in porro placeat explicabo, quos laboriosam et nihil doloribus excepturi. Qui fuga modi impedit in.</p>
      </div>

      <div className='projects' >
          {iconsData.map((i, idx) => <div key={idx} className='skillBox'> 
          {i.icon}
            <p className='iconName' >{i.name}</p>
          </div>)}
      </div>

    </div>
  )
}

export default Skills