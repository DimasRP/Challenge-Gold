

import { FaBars, FaTimes } from "react-icons/fa";
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"

const NavBar = () => {

    const [isMobile,setMobile] = useState (false)


  return (
    <nav className='container-navbar'>
        <div className='logo'></div>
        <ul className={isMobile? 'nav-links-mobile':'nav-links'}
        onClick={() => setMobile(false)}>
            <Link to='/' className='home'>
                <li>BCR</li>
            </Link>
            <Link to='/' className='whyUs'>
                <li>Our Services</li>
            </Link>
            <Link to='/' className=''>
                <li>Why Us</li>
            </Link><Link to='/' className=''>
                <li>Testimonial</li>
            </Link><Link to='/' className=''>
                <li>FAQ</li>
            </Link>
        </ul>
        <button 
        className='mobile-menu'
            onClick={() => setMobile(!isMobile)}
            >
            {isMobile? (
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