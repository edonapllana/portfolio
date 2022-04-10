import React from 'react'
import './contact.css'
//importing icons
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

export const Contact = () => {
  return (
    <section id="contact">
      <h2>The Contact</h2>
      <div className="container contact_container">
        <div className="contact_options">
          {/* Contact Informations Section */}
          <h2>Contact Informations</h2>
          <article className="contact_info">
            <h4><AiOutlineMail className="contact_icons"/></h4>
            <a href="mailto:edona.pllana0@gmail.com">edona.pllana0@gmail.com</a>
          </article>
          <article className="contact_info">
          <h4><AiOutlineLinkedin className="contact_icons"/></h4>
            <a href="https://www.linkedin.com/in/edona-pllana-9447b5177/" target="_blank">edona-pllana-9447b5177</a>
          </article>
          <div className="contact_info">
            <h4><AiOutlineGithub className="contact_icons"/></h4>
            <a href="https://github.com/edonapllana" target="_blank">edonapllana</a>
          </div>
        </div>
        {/* Contact Form */}
        <form action="">
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='your@email.com' required/>
          <textarea name='message' placeholder='Type your message here' rows="7" required></textarea>
          <button type='submit' className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;