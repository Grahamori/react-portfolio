import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Stormy Wynter',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eligendi aut dolorem eum sequi rerum, sit sed enim commodi dolorum inventore, quod perspiciatis facere iusto mollitia! Assumenda eveniet totam veritatis, suscipit, quos vitae atque quam, quidem enim expedita quis illo porro. Mollitia, deserunt expedita! Iusto molestias veritatis illum perspiciatis expedita!'
  },
  {
    avatar: AVTR2,
    name: 'Mr Thomas',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda veniam illo non temporibus consequatur omnis sequi consequuntur, rerum, officiis harum asperiores voluptatibus ea illum tempora, molestias error eos nulla iste?'
  },
  {
    avatar: AVTR3,
    name: 'Graham Thomas',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, sapiente explicabo corporis nisi odio animi, quibusdam repellendus est quae debitis provident amet placeat error nemo et numquam blanditiis esse? Illum corporis maxime soluta dignissimos adipisci accusantium eius nesciunt! Porro, officiis molestiae voluptatum sed eveniet voluptate consequuntur placeat ad vel maxime!'
  },
  {
    avatar: AVTR4,
    name: 'Julie Thomas',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, voluptate corrupti tempora voluptatibus commodi, tempore quos aspernatur itaque, assumenda debitis ratione rerum mollitia? Doloribus tenetur neque aliquam id repellat vero.'
  }
]



const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                  <img src={avatar} alt="Avatar" />
              </div>
              <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials