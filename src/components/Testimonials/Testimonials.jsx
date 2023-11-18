import React from 'react';
import './Testimonials.css';
import AVATAR1 from '../../asset/avatar1.jpg';
import AVATAR2 from '../../asset/avatar2.jpg';
import AVATAR3 from '../../asset/avatar3.jpg';
import AVATAR4 from '../../asset/avatar4.jpg';

import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const testimonialsData = [
  {
    avatar: AVATAR4,
    name: 'Jannat Mim',
    review: 'Mohammad Monis is an exceptional IT student specializing in C and C++ programming.With a passion for cryptocurrencies and video games, his technical expertise and dedication to continuous learning make him a valuable asset.I Recommend Mohammed for any project requiring a skilled programmer who delivers quality result.  ',
  },
  {
    avatar: AVATAR1,
    name: 'Sara',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos earum reiciendis hic. Explicabo, eligendi doloremque vero veritatis dignissimos ea tempora et illo amet minus ab optio culpa sed officiis voluptatibus!',
  },
  {
    avatar: AVATAR2,
    name: 'Hussain',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos earum reiciendis hic. Explicabo, eligendi doloremque vero veritatis dignissimos ea tempora et illo amet minus ab optio culpa sed officiis voluptatibus!',
  },
  {
    avatar: AVATAR3,
    name: 'Sameer',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos earum reiciendis hic. Explicabo, eligendi doloremque vero veritatis dignissimos ea tempora et illo amet minus ab optio culpa sed officiis voluptatibus!',
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from colleagues</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
         // install Swiper modules
         modules={[Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{ clickable: true }}>
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide className="testimonial" key={index}>
            <div className="client__avatar">
              <img src={testimonial.avatar} alt={`AVATAR ${index + 1}`} />
            </div>
            <h5 className='client__name'>{testimonial.name}</h5>
            <small className='client__review'>
              {testimonial.review}
            </small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
