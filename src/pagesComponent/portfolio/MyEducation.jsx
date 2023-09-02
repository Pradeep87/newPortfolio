import React from 'react'
import { FaSchool, FaBookOpen, FaBookReader } from "react-icons/fa";

const MyEducation = () => {
    return (
        <div className='portfolioSection'>
            <h2 className='h1'>My Education</h2>
            <div className='education' data-aos="zoom-in-up" >
                <div  data-aos="zoom-in-up" style={{width:"100%"}} >
                    <p className='text' data-aos="zoom-in-up" ><FaBookReader className='icons' /> Bachelor of Computer Application</p>
                    <p className='lightText'>Hemvati Nandan Bahuguna Garhwal University <br />Year 2018 - 2021</p>
                    <p className='bigPara' data-aos="zoom-in-up" >Omkarananda Institute of Management & Technology</p>
                </div>
            </div>
            <div className='education' data-aos="zoom-in-up" >
                <div >
                    <p className='text' data-aos="zoom-in-up" ><FaBookOpen className='icons' /> Intermediate </p>
                    <p className='lightText' data-aos="zoom-in-up" >Uttarakhand Board<br />Year 2018</p>
                    <p className='bigPara' data-aos="zoom-in-up" >Government Inter Collage
                    </p>
                </div>
                <div >
                    <p className='text' data-aos="zoom-in-up" ><FaSchool className='icons' /> High School</p>
                    <p className='lightText' data-aos="zoom-in-up" >Uttarakhand Board<br />Year 2016</p>
                    <p className='bigPara' data-aos="zoom-in-up" >Government Inter Collage
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MyEducation