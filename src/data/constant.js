import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaSass } from "react-icons/fa";
import { SiElectron, SiMongodb, SiRedux } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

export const iconsData = [
    {
        id: 1,
        icon: <FaHtml5 className='icons' />,
        name: "HTML5"
    },
    {
        id: 2,
        icon: <FaCss3 className='icons' />,
        name: "Css3"
    },
    {
        id: 3,
        icon: <FaSass className='icons' />,
        name: "Sass"
    }, {
        id: 4,
        icon: <DiJavascript1 className='icons' />,
        name: "JavaScript"
    },
    {
        id: 5,
        icon: <FaReact className='icons' />,
        name: "Reactjs"
    },
    {
        id: 6,
        icon: <SiRedux className='icons' />,
        name: "Redux"
    },
    {
        id: 7,
        icon: <FaReact className='icons' />,
        name: "React-Native"
    },
    {
        id: 8,
        icon: <SiElectron className='icons' />,
        name: "Electron"
    },
    {
        id: 9,
        icon: <FaNodeJs className='icons' />,
        name: "Nodejs"
    },
    {
        id: 10,
        icon: <SiMongodb className='icons' />,
        name: "Mongodb"
    },

]



export const pageRoutes = {
    homePage: "/",
    aboutUs: "/about",
    contact: "/contact",
    portfolio: "/portfolio"
}