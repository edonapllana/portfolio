import React from 'react'
import './testimonials.css'

//Importing Avatars from Assets
import AVATAR1 from '../../assets/images/avatar1.png'
import AVATAR2 from '../../assets/images/avatar2.png'
import AVATAR3 from '../../assets/images/avatar3.png'
import AVATAR4 from '../../assets/images/avatar4.webp'
import AVATAR5 from '../../assets/images/avatar5.jpg'

// Importing Swiper Core and required modules from swiperjs.com 
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//The Array of Testimonial Reviews Containing the Datas:
const data = [
  {
    t_avatar: AVATAR1,
    t_name: 'Ayda Valdez',
    t_review: 'From a set of data, Rebeca is able to establish a principle, or work out a rule, or suggest a reason for failure or success. Her analysis is always accurate and sometimes original.'
  },
  {
    t_avatar: AVATAR2,
    t_name: 'Ayda Valdez',
    t_review: 'No absences without valid reason in 6 months. Rebeca pays great attention to detail. She always presented work properly checked and completely free of error. '
  },
  {
    t_avatar: AVATAR3,
    t_name: 'Korban Wolf',
    t_review: 'Conversations with Rebeca are two-way. Rebeca pays great attention to detail. She always presented work properly checked and completely free of error. '
  },
  {
    t_avatar: AVATAR4,
    t_name: 'Mandy Reevez',
    t_review: 'Rebeca is willing to face physical risks and danger, and appears to do so without fear. Sets an example of bravery that inspires others. From a set of data, is able to establish a principle, or work out a rule. '
  },
  {
    t_avatar: AVATAR5,
    t_name: 'Katy Decker',
    t_review: 'She also has the ability to listen carefully to what others are saying, to understand and then to respond appropriately. Conversations with Rebeca are two-way.'
  },
]


export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews</h5>
      
      <Swiper className="container testimonials_container"
        // Swiper Module Installation
        modules={[ Navigation, Pagination ]}
        spaceBetween={45}
        slidesPerView={1}>
        {/* Testimonials Contents With Java Script using Map Array Method and SwiperSlide */}
         {
           data.map (({t_avatar, t_name, t_review}, index) => {
             return (
              <SwiperSlide className="testimonials">
                <div className="testimonial_avatar">
                  <img src={t_avatar} alt="Avatar"/>
                </div>
                <h5 className="testimonial_author">{t_name}</h5>
                <small className="testimonial_reviews">{t_review}</small>
              </SwiperSlide>
             )
           })
         }    
      </Swiper>    
    </section>
  )
}

export default Testimonials;