import React from 'react'

import { iconsData } from '../../data/constant';
import { AiOutlineSend } from "react-icons/ai";









const Portfolio = () => {
    return (
        <div className='portfolioSection'>

            <div className='myWork'>
                <h2 className='h1'>Work Experience</h2>
                <div>
                    <p className='text'><AiOutlineSend/> Web developer Intern</p>
                    <p className='lightText'>Koders-Dehradun (10 january - 25 April 2022)</p>
                    <p className='bigPara'>Developed web apps using React js and a
                        desktop application using React-Electron while
                        managing the State with Redux and Redux
                        middleware Thunk.</p>

                </div>
                <div className='second-work'>
                    <p className='text'><AiOutlineSend/> Frontend developer</p>
                    <p className='lightText'>Proponent technologies (22 may - present)</p>
                    <p className='bigPara'> Developed food app in MERN stack, Chat Application using Reactjs and Getstream.io and
                        a haircut salon Staff Management Application
                        using React Native.
                    </p>

                </div>

            </div>


            <div className='projects'>
                <div className='iconContainer'>
                    {iconsData.map((i, idx) => <div key={idx} className='iconBox'> {i.icon}
                        <p className='iconName' >{i.name}</p>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Portfolio