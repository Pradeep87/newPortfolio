import React from 'react'
import { AiFillHome,AiFillHeart } from "react-icons/ai";
import { FaUserAlt, } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { Link } from 'react-router-dom';
import { pageRoutes}from '.././../data/constant'

const Navbar = () => {

  const links = [
    {
      Path: pageRoutes.homePage,
      Id: 1,
      LinkName: "Home",
      Icon: <AiFillHome color="#ffffff" size={20} />
    },
    {
      Path: pageRoutes.aboutUs,
      Id: 2,
      LinkName: "About Me",
      Icon: <FaUserAlt   color="#ffffff" size={20} />
    },
    {
      Path: pageRoutes.portfolio,
      Id: 3,
      LinkName: "Portfolio",
      Icon: <AiFillHeart color="#ffffff" size={20} />
    },
    {
      Path: pageRoutes.contact,
      Id: 4,
      LinkName: "Contact Me",
      Icon: <MdPermContactCalendar color="#ffffff" size={20} />
    },

  ]
  return (
    <header className='navbar'>
        <ul className='navLink'>
          {
            links.map((l) => <li><Link to={l.Path}>{l.LinkName}</Link></li>)
          }
        </ul>
    </header>
  )
}

export default Navbar