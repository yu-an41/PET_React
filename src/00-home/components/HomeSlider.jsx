import React, { Component } from 'react'
import Slider from 'react-slick'

import { imgNodeUrl } from '../../my-config'

export default function HomeSlider() {
  const settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  }
  return (
    <div className="my-5 p-5 bg-white w-full border shadow-md rounded-lg">
      <Slider {...settings}>
        <div className="h-full flex justify-center items-center">
          <img
            className="object-cover w-full"
            src={`${imgNodeUrl}/images/products/cat1-can7.jpg`}
            alt="carousel"
          />
        </div>
        <div className="h-full flex justify-center items-center">
          <img
            className="object-cover w-full"
            src={`${imgNodeUrl}/images/products/can2.jpg`}
            alt="carousel"
          />
        </div>
        <div className="h-full flex justify-center items-center">
          <img
            className="object-cover w-full"
            src={`${imgNodeUrl}/images/products/can3.jpg`}
            alt="carousel"
          />
        </div>
      </Slider>
    </div>
  )
}
