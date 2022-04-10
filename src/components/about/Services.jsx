import React from 'react'
import './about.css'
//importing icons
import {AiOutlineAntDesign} from 'react-icons/ai'
import {MdDeveloperMode} from 'react-icons/md'
import {MdOutlineDraw} from 'react-icons/md'

export const Services = () => {
  return (
    <div className="container container_services">
      <h3>Services</h3>
      
      <div className="services_info">
        <article className="services_items">
          <AiOutlineAntDesign className="services_icon"/>
          <h3 className="services_tittle">Web Design</h3>
          <small className='services_description'>An effective proposal, is a persuasive sales document. It doesn't just show potential clients how much things will cost or when they will get done. It also gives them plenty of reasons why you're the best web designer for project.</small>
        </article>

        <article className="services_items">
          <MdDeveloperMode className="services_icon"/>
          <h3 className="services_tittle">Web Developement</h3>
          <small className='services_description'>An estimate is a simplistic document that rarely runs more than a few pages. It breaks down how much different aspects of the project will cost, and occasionally when the client can expect certain milestones to be completed.</small>
        </article>

        <article className="services_items">
          <MdOutlineDraw className="services_icon"/>
          <h3 className="services_tittle">Graphic Design</h3>
          <small className='services_description'>An effective proposal, is a persuasive sales document. It doesn't just show potential clients how much things will cost or when they will get done. It also gives them plenty of reasons why you're the best web designer for project.</small>
        </article>
      </div>
    </div>  
  )
}

export default Services;