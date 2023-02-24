import React from 'react'
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaSass } from "react-icons/fa";
import { SiElectron, SiMongodb, SiRedux } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

const icons = [
{
id:1,
icon:<FaReact  className='icons' />,
name:"Reactjs"
},
{
id:2,
icon:<FaNodeJs  className='icons' />,
name:"Nodejs"
},

{
id:3,
icon:<FaHtml5  className='icons' />,
name:"HTML5"
},
{
id:4,
icon:<FaCss3  className='icons' />,
name:"Css3"
},
{
id:5,
icon: <FaSass  className='icons' />,
name:"Sass"
},
{
id:6,
icon:<SiElectron  className='icons' />, 
name:"Electron"
},
{
id:7,
icon:<SiMongodb  className='icons' />,
name:"Mongodb"
},
{
id:8,
icon:<SiRedux  className='icons' />,
name:"Redux"
},
{
 id:9,
 icon: <DiJavascript1  className='icons' />,
name:"JavaScript"},
{
    id:10,
    icon:<FaReact  className='icons' />,
    name:"React-Native"
    },
]









const Portfolio = () => {
    return (
        <div className='portfolioSection'>

            <div className='myWork'>
                <h2 className='h1'>My Work</h2>
                <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi, est rerum mollitia nemo quod excepturi provident dolore ipsa! Molestias distinctio voluptatem nesciunt. Architecto quibusdam quisquam voluptatibus temporibus natus corporis culpa numquam dicta fugiat tempora in porro placeat explicabo, quos laboriosam et nihil doloribus excepturi. Qui fuga modi impedit in.</p>
            </div>


            <div className='projects'>
                <div>
                    projects
                </div>
                <div className='iconContainer'>
                {icons.map((i,idx) =><div key={idx} className='iconBox'> {i.icon}
                <p className='iconName' >{i.name}</p>
                 </div> )}
                </div>
            </div>
        </div>
    )
}

export default Portfolio