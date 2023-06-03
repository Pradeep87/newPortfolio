import React from 'react'
import { AiOutlineSend } from "react-icons/ai";
import { kyro, kyroLogo, ucLogo, uc1, uc2, argon, metaSole, truckin, sonu1, sonu2, sonu3, farm1, farm2, viet1, viet2, viet3, viet4, } from '../../assets';

const workingProjects = [
    {
        project: "Yogshala.in",
        description: "Yogshala.in is a comprehensive social media platform designed specifically for yoga teachers and students. This project encompasses both a web application and a mobile app that communicate with APIs. The platform offers a range of features, including chat functionality for seamless communication, yoga class scheduling for convenient planning, and addressing health issues related to yoga. By providing a dedicated space for the yoga community, Yogshala.in aims to connect individuals, facilitate learning, and promote overall well-being through the practice of yoga.",
        technology: "(Nextjs, React-Native, Nodejs, Expressjs and Mongodb)",
        images: []
    },
    {
        project: "Beatles Choice",
        description: "Beatles Choice is an e-commerce website designed to efficiently manage and sell a wide range of products across various categories. The website provides a user-friendly interface for customers to browse and purchase products based on their preferences. With robust categorization and organization, Beatles Choice aims to enhance the shopping experience by ensuring easy navigation and streamlined product selection.",
        technology: "(Nextjs, Nodejs, Expressjs and Mongodb)",
        images: []

    },
]

const projectData = [
    {
        project: "UC Toolbot",
        images: [ucLogo, uc1, uc2],
        description: "Responsibilities:Fixed bugs in functionality and UI for improved user experience. Collaborated with the team to identify and address issues, implementing effective solutions. Assisted in testing and troubleshooting to ensure the overall quality of the application was maintained.",
        technology: "(React-Electron Js)"
    },
    {
        project: "Argon AIO",
        description: "Developed Argon AIO from scratch using React-Electron Js, incorporating state management with Redux and react-redux. Successfully created a robust application with seamless user experiences, ensuring efficient state management and enhancing overall performance.",
        images: [argon, metaSole],
        technology: "(React-Electron Js)"
    },
    {
        project: "KYRO Tools",
        description: "I played a key role in developing the user interface, ensuring a visually appealing and intuitive design. I also implemented a dark mode feature to enhance user customization and experience. Additionally, I created a website using React.js, showcasing the project and providing relevant information in an engaging manner.",
        images: [kyroLogo, kyro],
        technology: "(React-Electron Js and React)"
    },
    {
        project: "Truckindigital",
        description: "In my work on the Truckindigital project, I was responsible for creating the user interface, delivering an intuitive and visually appealing design. I also integrated various APIs to enable seamless data exchange and functionality within the application. Additionally, I developed a chat application using Getstream.io, allowing real-time communication and collaboration among users.",
        images: [truckin],
        technology: "(React Js)"
    },
    {
        project: "Sonu Haircut Salon",
        description: "In my role at Sonu Haircut Salon, I successfully developed two apps using React Native Expo. First, I created a staff app that streamlined scheduling, resource management, and enhanced operational efficiency for the salon. Additionally, I developed a client app that provided users with a seamless and user-friendly experience for booking appointments and accessing salon services.",
        images: [sonu1, sonu2, sonu3],
        technology: "(React-Native Expo)"
    },
    {
        project: "Farmpreneur",
        description: "In the Farmpreneur app, I took charge of designing the user interface and integrating APIs to provide weather information from open weather services. This app provided a platform for farmers to sell their crops, empowering them with a digital marketplace to reach potential buyers and optimize their sales opportunities.",
        images: [farm1, farm2],
        technology: "(React-Native Expo)"
    },
    {
        project: "Vietnam Factory ",
        description: "In my contributions to the Vietnam Factory B2B project, I successfully addressed bugs and errors in the frontend APIs during version 1, ensuring smooth functionality. In version 2, I took on a more comprehensive role by creating the project from scratch. This involved setting up the entire project using Nuxt.js, implementing robust state management, and incorporating authentication through Nuxt plugins. I also facilitated language translation in both Vietnamese and English, enhancing accessibility. Furthermore, I integrated Laravel APIs to seamlessly fetch and display data on the frontend, improving overall user experience.",
        images: [viet1, viet2, viet3, viet4],
        technology: "(Nuxtjs)"
    },
]










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
                    <h2 className='h1'>Projects Completed</h2>
                    {
                        projectData.map((d) => (
                            <div className='second-work'>
                                <p className='text'><AiOutlineSend /> {d.project}</p>
                                <p className='lightText'>{d.technology}</p>
                                <p className='bigPara'>{d.description}
                                </p>
                            </div>
                        ))
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