import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
  avatar: AVTR1,
  name: 'Daisy Danials',
  review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ut vitae accusamus deserunt sunt nulla excepturi, voluptate illum eveniet tempora.'
},

{
  avatar: AVTR2,
  name: 'Ross Sins',
  review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ut vitae accusamus deserunt sunt nulla excepturi, voluptate illum eveniet tempora.'
},

{
  avatar: AVTR3,
  name: 'Mark Taylor',
  review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ut vitae accusamus deserunt sunt nulla excepturi, voluptate illum eveniet tempora.'
},

{
  avatar: AVTR4,
  name: 'Ziya Khan',
  review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ut vitae accusamus deserunt sunt nulla excepturi, voluptate illum eveniet tempora.'
},

]
const Tesimonials = () => {
  return (
    <section id='testimonials'>
      <h5>yReview From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
     
      {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key={index} className="testimonials">
          <div className="client_avatar">
            <img src={avatar} alt="Avatar One" />
          </div>
          <h5 className='client_name'>{name}</h5>
            <small className='client_review'>
              {review}
            </small>
        </SwiperSlide>
          )
        })
      } 
      </Swiper>
    </section>
  )
}

export default Tesimonials