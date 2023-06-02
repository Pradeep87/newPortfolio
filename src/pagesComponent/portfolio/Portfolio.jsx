import React from 'react'

import { iconsData } from '../../data/constant';
import { AiOutlineSend } from "react-icons/ai";

const Portfolio = () => {
    return (
        <div className='portfolioSection'>
            <div className='myWork'>
                <h2 className='h1'>Work Experience</h2>
                <div>
                    <p className='text'><AiOutlineSend /> Frontend developer </p>
                    <p className='lightText'>Proponent technologies (22 may 2022 - 31 may 2023)</p>
                    <p className='bigPara'>Experienced in developing a Food app using the MERN stack, delivering a seamless ordering and delivery experience. Created a chat application using React.js and Getstream.io, enabling real-time communication and collaboration. Developed mobile apps using React Native Expo, providing cross-platform functionality for enhanced user experiences.</p>
                </div>
                <div className='second-work'>
                    <p className='text'><AiOutlineSend /> Web developer Intern</p>
                    <p className='lightText'>Koders-Dehradun (10 january - 25 April 2022)</p>
                    <p className='bigPara'>Worked on various front-end projects utilizing React.js and React-Electron. Developed responsive and user-friendly interfaces, implemented state management with Redux, and utilized React-Electron to create desktop applications. Collaborated with cross-functional teams to deliver high-quality solutions that exceeded client expectations.
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