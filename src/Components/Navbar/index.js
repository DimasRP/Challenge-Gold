

import { FaBars, FaTimes } from "react-icons/fa";
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"

const NavBar = () => {

    const [isOpen,setOpen] = useState (false)


  return (
    <nav className='container-navbar'>
        <Link to="/">
        <div className='logo'></div>
        </Link>
        
        <ul className={isOpen? 'nav-links-mobile':'nav-links'} onClick={() => setOpen(false)}>
            <li className="bcr">
                <p href="" >BCR</p>
            </li>
            <li> 
                <a href="#ourservices">Our Services</a>
            </li>
            <li>
                <a href="#whyus">Why us</a>
            </li>
            <li>
                <a href="#testimonial">Testimonial</a>
            </li>
            <li>
                <a href="#faq"> FAQ</a>
            </li>
        </ul>
        <button className='toggle'onClick={() => setOpen(!isOpen)}>
            {isOpen? (
                <FaTimes className="FaTimes" />
            ):(
                <FaBars className="FaBars"/>
            )
            }
        </button>
    </nav>
  )
}

export default NavBar