import React, { useState } from 'react'
import { AiOutlineSend, AiFillMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { SocialIcons } from '../../components';
import emailjs from 'emailjs-com';



const ContactUs = () => {

    const [msg, setMsg] = useState({
        user_name: "", email: "", message: ""
    });
    const [loading, setLoading] = useState(false)
    const getInput = (e) => {

        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)
        setMsg({ ...msg, [name]: value });

    }

    const PostData = async (e) => {
        e.preventDefault();

        if (!msg.user_name || !msg.email || !msg.message) {
            return window.alert("please fill the data properly");
        }
        setLoading(true)
        const templateParams = {
            to_email: "pradeep8755prop@gmail.com",
            message: msg.message,
            from_name: msg.user_name,
            to_name: "Pradeep Rajput",
            from_email: msg.email,
        };
        emailjs
            .send(
                "service_zum0doi",
                "template_o8f06z8",
                templateParams,
                "user_nAIlcg7KQgQgxIn9NAnIR"
            )
            .then(
                function (response) {
                    msg.message = ""
                    msg.email = ""
                    msg.user_name = ""
                    setLoading(false)
                    window.alert("Message Sent");
                },
                function (error) {
                    setLoading(false)
                    msg.message = ""
                    msg.email = ""
                    msg.user_name = ""
                    window.alert("Error Sending Message");
                }
            );

    }



    return (
        <div className='contactSection'>
            <h2 className='h1' data-aos="zoom-in-up" >Contact Me</h2>
            <div className='contactList'>
                <div className='firstDiv'>
                    <div data-aos="zoom-in-up" >
                        <a href="mailto:" className='bigPara'><AiFillMail className='icons' /> pradeep87055@gmail.com</a>
                        <a href="tel:+918755819345" className='bigPara'><FaPhoneAlt className='icons' />+91 8755819345</a>
                    </div>
                    <div data-aos="zoom-in-up" >
                        <SocialIcons />
                    </div>
                </div>

                <div className='messageArea' data-aos="zoom-in-up" >
                    <div className='sendMessage'>
                        <form onSubmit={PostData} >
                            <p className='text'><AiOutlineSend /> Message Me</p>

                            <input type="text" className='textInput'
                                name="user_name"
                                placeholder='Enter Your Name'
                                onChange={getInput}
                                value={msg.user_name}
                            />
                            <input type="email" className='textInput'
                                name="email"
                                value={msg.email}

                                placeholder='Enter Your Email'
                                onChange={getInput}
                            />

                            <textarea name="message" className='textInput' value={msg.message} onChange={getInput} placeholder='Type Message' id="" cols="30" rows="10"></textarea>
                            <button type='submit' className='btn'> {loading ? "Please Wait" : "Send"} &nbsp;<AiOutlineSend /></button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs

