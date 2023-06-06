import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";

const socialIcon = [
    {
        id: 2,
        icon: <FaFacebook className='icons' />,
        name: "Facebook",
        link: "https://www.facebook.com/profile.php?id=100025231511617"
    },
    {

        id: 3,
        icon: <FaInstagram className='icons' />,
        name: "Instagram",
        link: "https://www.instagram.com/pradeep87055/"
    },
    {
        id: 4,
        icon: <FaLinkedinIn className='icons' />,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/pradeep-rajput-a4640b214/"
    },
    {
        id: 5,
        icon: <FaGithub className='icons' />,
        name: "GitHub",
        link: "https://github.com/Pradeep87"
    },

    {
        id: 7,
        icon: <FaWhatsapp className='icons' />,
        name: "WhatsApp",
        link: "https://wa.me/+918755819345"
    },

]
const SocialIcons = () => {
    return (
        <div className='iconsContainer'>
            {socialIcon.map((i) => <a key={i.id} href={i.link} target="_blank" rel="noopener noreferrer">{i.icon}</a>)}
        </div>
    )
}

export default SocialIcons