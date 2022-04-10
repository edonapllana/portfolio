import React from 'react'
import './footer.css'
//importing icons 
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'

export const Footer = () => {
  return (
    <section id="footer">
        <div className="container footer_container">
            <h3>Keep in touch</h3>
            <div className="footer_icons">
                <a href="#"><AiFillFacebook className="icons"/></a>
                <a href="#"><AiOutlineInstagram className="icons"/></a>
                <a href="#"><AiFillTwitterCircle className="icons"/></a>
                <a href="#"><AiOutlineLinkedin className="icons"/></a>
                <a href="#"><AiOutlineMail className="icons"/></a>
            </div>
        </div>
    </section>
  )
}

export default Footer;