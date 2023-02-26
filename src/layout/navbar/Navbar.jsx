import React,{useState} from 'react'
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { FaUserAlt, } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { pageRoutes } from '.././../data/constant'
const links = [
  {
    Path: pageRoutes.homePage,
    Id: 1,
    LinkName: "Home",
    Icon: <AiFillHome color="rgba($color: #09e6ff70, $alpha: 2.0)" size={20} />
  },
  {
    Path: pageRoutes.portfolio,
    Id: 3,
    LinkName: "Portfolio",
    Icon: <AiFillHeart color="rgba($color: #09e6ff70, $alpha: 2.0)" size={20} />
  },
  {
    Path: pageRoutes.contact,
    Id: 4,
    LinkName: "Contact Me",
    Icon: <MdPermContactCalendar color="rgba($color: #09e6ff70, $alpha: 2.0)" size={20} />
  },

]
const Navbar = () => {
const [toggle, setToggle] = useState(false)

return (
    <header className={toggle?' navbar navbarBg':"navbar" }>
      <div className='toggle' onClick={()=>setToggle(!toggle)} >
        <div className='toggleBox'>
        <div className={toggle ?'one four':"one"}></div>
        <div className={toggle ?"one five":'one'}></div>
        <div className={toggle?"one six" :'one' }></div>
        </div>
      </div>
      <ul className={toggle?"navLink show":"navLink hide"}  >
        {
          links.map((l) => <li onClick={()=>setToggle(!toggle)}><NavLink className={({ isActive }) => isActive ? "activeClass" : ""}
            to={l.Path}>{l.Icon}&nbsp;&nbsp;{l.LinkName}</NavLink></li>)
        }
      </ul>
    </header>
  )
}

export default Navbar