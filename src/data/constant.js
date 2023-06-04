import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaSass,FaGithub } from "react-icons/fa";
import { SiElectron, SiMongodb, SiRedux,SiMicrosoftexchange,SiNextdotjs,SiVuedotjs,SiNuxtdotjs } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import {
    uc1,uc2,ucLogo ,metaSole,argon,kyroLogo,kyro,truckin,y1,y2,y3,y4,y5,
sonu1,farm1,farm2,viet1,viet2,viet3,viet4,farm3,sonu4,sonu5,sonu6,sonu7,sonu8,viet5,farm4
} from '../assets';


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




export const workingProjects = [
    {
        project: "Yogshala.in",
        description: "Yogshala.in is a comprehensive social media platform designed specifically for yoga teachers and students. This project encompasses both a web application and a mobile app that communicate with APIs. The platform offers a range of features, including chat functionality for seamless communication, yoga class scheduling for convenient planning, and addressing health issues related to yoga. By providing a dedicated space for the yoga community, Yogshala.in aims to connect individuals, facilitate learning, and promote overall well-being through the practice of yoga.",
        technology: "(Nextjs, React-Native, Nodejs, Expressjs and Mongodb)",
        images: [y1,y2,y3,y4,y5],
        icons:[
             {
        id: 12,
        icon: <SiNextdotjs className='icons' />,
        name: "Next js"
    }, {
        id: 3,
        icon: <FaSass className='icons' />,
        name: "Sass"
    },  {
        id: 9,
        icon: <FaNodeJs className='icons' />,
        name: "Node js"
    }, {
        id: 10,
        icon: <SiMongodb className='icons' />,
        name: "Mongodb"
    },
        ]
    },
    // {
    //     project: "Beatles Choice",
    //     description: "Beatles Choice is an e-commerce website designed to efficiently manage and sell a wide range of products across various categories. The website provides a user-friendly interface for customers to browse and purchase products based on their preferences. With robust categorization and organization, Beatles Choice aims to enhance the shopping experience by ensuring easy navigation and streamlined product selection.",
    //     technology: "(Nextjs, Nodejs, Expressjs and Mongodb)",
    //     images: []

    // },
]

export const projectData = [
    {
        project: "UC Toolbot",
        images: [ucLogo, uc1, uc2],
        description: "Responsibilities:Fixed bugs in functionality and UI for improved user experience. Collaborated with the team to identify and address issues, implementing effective solutions. Assisted in testing and troubleshooting to ensure the overall quality of the application was maintained.",
        technology: "(React-Electron Js)",
        icons:[
            {
                icon:<SiElectron className='icons' color="#215276" />,
                name:"Electron js",
                color:"#215276"
            },
            {
                icon: <FaReact className='icons' color="#177e68"  />,
                name: "React js",
                color:"#177e68"
            },
        ]
    },
    {
        project: "Argon AIO",
        description: "Developed Argon AIO from scratch using React-Electron Js, incorporating state management with Redux and react-redux. Successfully created a robust application with seamless user experiences, ensuring efficient state management and enhancing overall performance.",
        images: [argon, metaSole],
        technology: "(React-Electron Js)",
        icons:[
            {
                icon:<SiElectron className='icons' color="#629fd0" />,
                name:"Electron js",
                color:"#629fd0"
            },
            {
                icon: <FaReact className='icons' color="#2a5fab" />,
                name: "React js",
                color:"#2a5fab"
            },
        ]
    },
    {
        project: "KYRO Tools",
        description: "I played a key role in developing the user interface, ensuring a visually appealing and intuitive design. I also implemented a dark mode feature to enhance user customization and experience. Additionally, I created a website using React.js, showcasing the project and providing relevant information in an engaging manner.",
        images: [kyroLogo, kyro],
        technology: "(React-Electron Js and React)",
        icons:[
            {
                icon:<SiElectron className='icons' color="#b424f0" />,
                name:"Electron js",
                color:"#b424f0"
            },
            {
                icon: <FaReact className='icons' color="#fc994d" />,
                name: "React js",
                color:"#fc994d"
            },
        ]
    },
    {
        project: "Truckindigital",
        description: "In my work on the Truckindigital project, I was responsible for creating the user interface, delivering an intuitive and visually appealing design. I also integrated various APIs to enable seamless data exchange and functionality within the application. Additionally, I developed a chat application using Getstream.io, allowing real-time communication and collaboration among users.",
        images: [truckin,truckin],
        technology: "(React Js)",
        icons:[
            {
                icon: <FaReact className='icons' color="#8e7eed" />,
                name: "React js",
                color:"#8e7eed"
            },
        ]
    },
    {
        project: "Sonu Haircut Salon",
        description: "In my role at Sonu Haircut Salon, I successfully developed two apps using React Native Expo. First, I created a staff app that streamlined scheduling, resource management, and enhanced operational efficiency for the salon. Additionally, I developed a client app that provided users with a seamless and user-friendly experience for booking appointments and accessing salon services.",
        images: [sonu4,sonu5,sonu6,sonu7,sonu8,sonu1,],
        technology: "(React-Native Expo)",
        icons:[
            {
                icon: <FaReact className='icons' color="#ffbd24"/>,
                name: "React-Native",
                color:"#ffbd24"
            },
        ]
    },
    {
        project: "Farmpreneur",
        description: "In the Farmpreneur app, I took charge of designing the user interface and integrating APIs to provide weather information from open weather services. This app provided a platform for farmers to sell their crops, empowering them with a digital marketplace to reach potential buyers and optimize their sales opportunities.",
        images: [farm3,farm4,farm1, farm2],
        technology: "(React-Native Expo)",
        icons:[
            {
                icon: <FaReact className='icons' color="#3c871a"  />,
                name: "React-Native",
                color:"#3c871a"
            },
        ]
    },
    {
        project: "Vietnam Factory ",
        description: "In my contributions to the Vietnam Factory B2B project, I successfully addressed bugs and errors in the frontend APIs during version 1, ensuring smooth functionality. In version 2, I took on a more comprehensive role by creating the project from scratch. This involved setting up the entire project using Nuxt.js, implementing robust state management, and incorporating authentication through Nuxt plugins. I also facilitated language translation in both Vietnamese and English, enhancing accessibility. Furthermore, I integrated Laravel APIs to seamlessly fetch and display data on the frontend, improving overall user experience.",
        images: [viet5,viet1, viet2, viet3, viet4],
        technology: "(Nuxt js)",
        icons:[
            {
                icon: <SiNuxtdotjs className='icons' color="#ffbd24" />,
                name: "Nuxt js",
                color:"#ffbd24"
            },
            {
                icon: <FaSass className='icons' color="#fef5de" />,
                name: "Sass",
                color:"#fef5de"
            }
        ]
    },
]
