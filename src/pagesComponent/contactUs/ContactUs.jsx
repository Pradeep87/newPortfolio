import React from 'react'
import { AiOutlineSend, AiFillMail } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaGithub, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
const socialIcon = [

    {
        id: 2,
        icon: <FaFacebook className='icons' />,
        name: "Facebook"
    },
    {
        id: 3,
        icon: <FaInstagram className='icons' />,
        name: "Instagram"
    },
    {
        id: 4,
        icon: <FaLinkedinIn className='icons' />,
        name: "LinkedIn"
    },
    {
        id: 5,
        icon: <FaGithub className='icons' />,
        name: "GitHub"
    },

    {
        id: 7,
        icon: <FaWhatsapp className='icons' />,
        name: "WhatsApp"
    },

]
const ContactUs = () => {
    return (
        <div className='contactSection'>
            <h2 className='h1'>Contact Me</h2>
            <div className='contactList'>
                <div >
                    <a href="mailto:" className='text'><FaPhoneAlt className='icons' />pradeep87055@gmail.com</a>
                    <a href="tel:+918755819345" className='text'><AiFillMail className='icons' />+91 8755819345 </a>
                </div>

                <div>
                    <p className='text'><AiOutlineSend />Social Accounts</p>
                    <div className='iconContainer'>
                        {socialIcon.map((i) => i.icon)}
                    </div>
                </div>
                <div className='messageArea'>
                    <div className='sendMessage'>
                        <p className='text'><AiOutlineSend /> Message Me</p>
                        <textarea name="" className='textInput' placeholder='type a message' id="" cols="30" rows="10"></textarea>
                        <button className='btn'>Send <AiOutlineSend /></button>
                    </div>
                    <div className='sendMessage'>
                        <p className='text'><AiOutlineSend />Send Feedback</p>
                        <textarea name="" className='textInput' placeholder='type a message' id="" cols="30" rows="10"></textarea>
                        <button className='btn'>Send <AiOutlineSend /></button>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default ContactUs