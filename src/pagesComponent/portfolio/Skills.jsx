import React from 'react'
import { iconsData } from '../../data/constant'

const Skills = () => {
  return (
    <div className='portfolioSection'>
      <div className='myWork' >
        <h1>MY Skills</h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione enim ad iste nihil. Perferendis quaerat fugit, consequuntur quod alias incidunt optio nobis. Corporis iste, ducimus animi rem laboriosam vitae ipsam molestias dignissimos. Possimus architecto earum molestias. Voluptatibus fugit ut velit debitis, earum consectetur esse hic, odio culpa tempora, odit possimus!</p>

      </div>

      <div className='projects' >
        <div className='iconContainer'>
          {iconsData.map((i, idx) => <div key={idx} className='iconBox'> {i.icon}
            <p className='iconName' >{i.name}</p>
          </div>)}
        </div>


      </div>

    </div>
  )
}

export default Skills