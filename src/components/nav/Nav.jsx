import React, {useState, useEffect} from 'react'
import './nav.css'
//importing react icons
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {AiOutlineComment} from 'react-icons/ai'
import {AiOutlineContacts} from 'react-icons/ai'

import {AiOutlineMenu} from 'react-icons/ai'


//importing the logo
import logo from '../../assets/images/berry.png'

export const Nav = () => {

  //Creating Statements for the Navbar toggle to work
  const [toggleMenu, setToggleMenu] = useState(false)
  
  const [screenWidth, setScreenWidth] = useState (window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  //Use Effects in case of shrinks
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <>
    {/* The Menu */}
      <nav className="main_nav">
        {/* The Logo */}
        <h2 className="logo">
            <span>E</span>
            <span>P</span>
        </h2>
        {/* Menu Items */}
        {(toggleMenu || screenWidth > 600) && (
          <ul className="menu-list">
          <li className="menu-items">
            <a href="#home" id="frst">Home</a>
          </li>
          <li className="menu-items">
            <a href="#about">About</a>
          </li>
          <li className="menu-items">
            <a href="#projects">Projects</a>
          </li>
          <li className="menu-items">
            <a href="#testimonials">Testimonials</a>
          </li>
          <li className="menu-items">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        )}
        {/* The Button */}
        <button onClick={toggleNav} className="menu-btn"><AiOutlineMenu/></button>
      </nav>
    </>
    
  )
}
export default Nav;