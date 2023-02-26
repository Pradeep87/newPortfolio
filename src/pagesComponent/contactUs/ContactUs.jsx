import React from 'react'
import { AiOutlineSend, AiFillMail } from "react-icons/ai";
import {  FaPhoneAlt } from "react-icons/fa";
import { SocialIcons } from '../../components';
const ContactUs = () => {
    return (
        <div className='contactSection'>
            <h2 className='h1'>Contact Me</h2>
            <div className='contactList'>
                <div >
                    <a href="mailto:" className='text'><AiFillMail className='icons' />pradeep87055@gmail.com</a>
                    <a href="tel:+918755819345" className='text'><FaPhoneAlt className='icons' />+91 8755819345</a>
                </div>
                <div>
                    <p className='text'><AiOutlineSend /> Social Media</p>
                    <SocialIcons/>
                </div>
                <div className='messageArea'>
                    <div className='sendMessage'>
                        <p className='text'><AiOutlineSend /> Message Me</p>
                        <textarea name="" className='textInput' placeholder='type a message' id="" cols="30" rows="10"></textarea>
                        <button className='btn'>Send <AiOutlineSend /></button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ContactUs