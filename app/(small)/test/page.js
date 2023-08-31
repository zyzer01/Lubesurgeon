'use client';

import React from 'react';
import Slider from 'react-slick';
import '@/styles/swiper.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <div className="wrapper">
      <Slider {...settings}>
        <div className="bg-bulaba text-white">
          <h3 className="h-20 flex justify-center items-center">1</h3>
        </div>
        <div className="bg-bulaba text-white">
          <h3 className="h-20 flex justify-center items-center">2</h3>
        </div>
        <div className="bg-bulaba text-white">
          <h3 className="h-20 flex justify-center items-center">3</h3>
        </div>
        <div className="bg-bulaba text-white">
          <h3 className="h-20 flex justify-center items-center">4</h3>
        </div>
        <div className="bg-bulaba text-white">
          <h3 className="h-20 flex justify-center items-center">5</h3>
        </div>
        <div className="bg-bulaba text-white">
          <h3 className="h-20 flex justify-center items-center">6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
