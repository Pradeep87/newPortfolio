import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaSass,FaGithub } from "react-icons/fa";
import { SiElectron, SiMongodb, SiRedux,SiMicrosoftexchange,SiNextdotjs,SiVuedotjs,SiNuxtdotjs } from "react-icons/si";
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
        name: "React js"
    },
    {
        id: 12,
        icon: <SiNextdotjs className='icons' />,
        name: "Next js"
    },
   
   
    {
        id: 7,
        icon: <FaReact className='icons' />,
        name: "React-Native"
    },
    {
        id: 8,
        icon: <SiElectron className='icons' />,
        name: "Electron js, React-Electron"
    },
    {
        id: 9,
        icon: <FaNodeJs className='icons' />,
        name: "Node js, Express js"
    },
    {
        id: 10,
        icon: <SiMongodb className='icons' />,
        name: "Mongodb, Mongoose"
    },
    {
        id: 13,
        icon: <SiVuedotjs className='icons' />,
        name: "Vue js"
    },
    {
        id: 14,
        icon: <SiNuxtdotjs className='icons' />,
        name: "Nuxt js"
    },
    {
        id: 6,
        icon: <SiRedux className='icons' />,
        name: "Redux, Redux-Middleware, Redux-Toolkit"
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
