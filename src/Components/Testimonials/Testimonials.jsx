import React from 'react'
import './Testimonials.css'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review de nuestros clientes</h5>
      <h2>Testimonios</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="container testimonials__container">
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src="" alt="" />            
          </div>
          <h5 className="client__name">Katzune Starky</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis commodi voluptatum quaerat consequuntur velit veniam earum obcaecati eveniet hic asperiores.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src="" alt="" />            
          </div>
          <h5 className="client__name">Katzune Starky</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis commodi voluptatum quaerat consequuntur velit veniam earum obcaecati eveniet hic asperiores.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials