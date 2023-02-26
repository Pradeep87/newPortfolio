import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaSass,FaGithub } from "react-icons/fa";
import { SiElectron, SiMongodb, SiRedux,SiMicrosoftexchange } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";


export const pageRoutes = {
    homePage: "/",
    aboutUs: "/about",
    contact: "/contact",
    portfolio: "/portfolio"
}



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
        name: "JavaScript, ECMAScript."
    },
    {
        id: 5,
        icon: <FaReact className='icons' />,
        name: "Reactjs"
    },
    {
        id: 6,
        icon: <SiRedux className='icons' />,
        name: "Redux, Redux-Middleware, Redux-Toolkit"
    },
    {
        id: 7,
        icon: <FaReact className='icons' />,
        name: "React-Native"
    },
    {
        id: 8,
        icon: <SiElectron className='icons' />,
        name: "Electronjs, React-Electron"
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
    {
        id: 11,
        icon: <FaGithub className='icons' />,
        name: "Git Version Control"
    },
    {
        id: 11,
        icon: <SiMicrosoftexchange className='icons' />,
        name: "Office Automation Tools"
    },

]
