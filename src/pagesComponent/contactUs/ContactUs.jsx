import React from 'react'
import { AiOutlineSend, AiFillMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { SocialIcons } from '../../components';
const ContactUs = () => {
    return (
        <div className='contactSection'>
            <h2 className='h1' data-aos="zoom-in-up" >Contact Me</h2>
            <div className='contactList'>
                <div data-aos="zoom-in-up" >
                    <a href="mailto:" className='bigPara'><AiFillMail className='icons' /> pradeep87055@gmail.com</a>
                    <a href="tel:+918755819345" className='bigPara'><FaPhoneAlt className='icons' />+91 8755819345</a>
                </div>
                <div data-aos="zoom-in-up" >
                    <SocialIcons />
                </div>
                <div className='messageArea' data-aos="zoom-in-up" >
                    <div className='sendMessage'>
                        <p className='text'><AiOutlineSend /> Message Me</p>
                        <textarea name="" className='textInput' placeholder='Type a message' id="" cols="30" rows="10"></textarea>
                        <button className='btn'>Send <AiOutlineSend /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs