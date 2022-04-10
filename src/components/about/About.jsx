import React from 'react'
//importing About pages special style sheet 
import './about.css'
//importing picture from about me 
import Me from '../../assets/images/my-pic-2.jpg'
//importing icons from about me
import {AiOutlineForm} from 'react-icons/ai'
import {BsAward} from 'react-icons/bs'
import {MdOutlineLibraryAddCheck} from 'react-icons/md'

import Services from './Services'

import {AiOutlineCheck} from 'react-icons/ai'

export const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      {/* main about me container */}
      <div className="container about_container">
        
        {/* about me container with the image */}
        <div className="about_me">
          <div className="about_me-img">
            <img src={Me} alt="My image"/>
          </div>
        </div>

        {/* about me containing cards with the informations */}
        <div className="about_content">
          <div className="about_cards">
            {/* about me cards an an article tags */}
            <article className="about_card">
              <AiOutlineForm className="about_icon"/>
              <h5>Student</h5>
              <small>Engineering Informatics</small>
            </article>

            <article className="about_card">
              <BsAward className="about_icon"/>
              <h5>Experience</h5>
              <small>2 Years+ Programming</small>
            </article>

            <article className="about_card">
              <MdOutlineLibraryAddCheck className="about_icon"/>
              <h5>Projects</h5>
              <small>Small Ammount Woked</small>
            </article>
          </div>

          {/*About me Paragraph */}
          <p>
          I am a student, majoring in Mechanical and Computer
          Engineering, in the branch of Engineering Informatics.
          Currently, I am in the last stages and close to graduation. I'm
          working on my last project, diploma project, in the field of
          Artificial Engineering and trying to learn different technologies
          from home.
          </p>
          {/* A Contact Button */}
        </div>
      </div> 
      <div className="services">
        <Services />
      </div> 
    </section> 
  )
}

export default About;