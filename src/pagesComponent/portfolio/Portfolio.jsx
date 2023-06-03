import React, { useState, useEffect } from 'react'
import { AiOutlineSend } from "react-icons/ai";
import { workingProjects, projectData } from '../../data/constant';

const ProjectSection = ({ d }) => {

    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount === d.images.length - 1) { return 0 } else return prevCount + 1
            });
        }, 2000);
        return () => {
            clearInterval(timer);
        };
    }, [d.images.length]);

    return (
        <div className='second-work'  >
            <p className='text'><AiOutlineSend /> {d.project}</p>
            <img className='projectImages' src={d.images[count]} alt={d.project} />
            <div className='techContainer'>
                {
                    d.icons.map((i, idx) => <div className='projectsIcon' key={idx}>
                        {i.icon}
                        <p className='lightText'>{i.name}</p>
                    </div>)
                }
            </div>
            <p className='bigPara'>{d.description}
            </p>
        </div>
    )
}

const Portfolio = () => {
    return (
        <div className='portfolioSection'>
            <div className='myWork'>
                <h2 className='h1'>Work Experience</h2>
                <div>
                    <p className='text'><AiOutlineSend /> Frontend Developer </p>
                    <p className='lightText'>Proponent Technologies <br />(22 may 2022 - 31 may 2023)</p>
                    <p className='bigPara'>Experienced in developing a Food app using the MERN stack, delivering a seamless ordering and delivery experience. Created a chat application using React.js and Getstream.io, enabling real-time communication and collaboration. Developed mobile apps using React Native Expo, providing cross-platform functionality for enhanced user experiences.</p>
                </div>
                <div className='second-work'>
                    <p className='text'><AiOutlineSend /> Web Developer Intern</p>
                    <p className='lightText'>Koders-Dehradun <br />(10 january - 25 April 2022)</p>
                    <p className='bigPara'>Worked on various front-end projects utilizing React.js and React-Electron. Developed responsive and user-friendly interfaces, implemented state management with Redux, and utilized React-Electron to create desktop applications. Collaborated with cross-functional teams to deliver high-quality solutions that exceeded client expectations.
                    </p>
                </div>
            </div>
            <div className='projects'>

                <div className='iconContainer'>
                    <h2 className='h1' style={{marginTop:'50px'}} >Projects Completed</h2>
                    {
                        projectData.map((d, idx) => <ProjectSection d={d} key={idx} />)
                    }

                    <h2 className='h1' style={{ marginTop: '50px' }}  >Working Projects</h2>
                    {
                        workingProjects.map((d) => (
                            <div className='second-work'>
                                <p className='text'><AiOutlineSend /> {d.project}</p>
                                <p className='lightText'>{d.technology}</p>
                                <p className='bigPara'>{d.description}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio