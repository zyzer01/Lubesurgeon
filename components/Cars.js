'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/grid';
import Heading from './utilities/Heading';

// SwiperCore.use([Grid, Autoplay]);

function Cars(props) {
  const carBrands = [
    '/images/cars/acura-logo-vector-01 1.png',
    '/images/cars/aston-martin-logo-vector-01 1.png',
    '/images/cars/aston-martin-logo-vector-01 1.png',
    '/images/cars/aston-martin-logo-vector-01 1.png',
    '/images/cars/aston-martin-logo-vector-01 1.png',
    '/images/cars/aston-martin-logo-vector-01 1.png',
    '/images/cars/audi-logo-vector-download 1.png',
    '/images/cars/audi-logo-vector-download 1.png',
    '/images/cars/audi-logo-vector-download 1.png',
    '/images/cars/audi-logo-vector-download 1.png',
    '/images/cars/audi-logo-vector-download 1.png',
    '/images/cars/audi-logo-vector-download 1.png',
  ];
  return (
    <>
      <Swiper
        modules={[Grid, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        grid={{
          rows: 4,
          fill: 'row',
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        {carBrands.map((brand, index) => (
          <SwiperSlide key={index}>
            <img src={brand} alt={`Car Brand ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Cars;
