import React, { Component, useState, useRef } from 'react'
import Slider from 'react-slick'

import { imgNodeUrl } from '../../my-config'

export default function HomeSlider() {
  const slider = useRef()
  const [autoplay, setAutoplay] = useState(true)
  // const [sliderSettings, setSliderSettings] = useState({
  //   infinite: true,
  //   autoplay: autoplay,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   pauseOnHover: true,
  // })

  const sliderSettings = {
    // dots: true,
    infinite: true,
    autoplay: autoplay,
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
  const toggleAutoplay = () => {
    if (autoplay) {
      slider.current.slickPause()
    } else {
      slider.current.slickPlay()
    }
    setAutoplay(!autoplay)
  }
  return (
    <div className="mb-5 p-5 bg-white w-full border shadow-md rounded-lg">
      <Slider {...sliderSettings} ref={slider}>
        <div className="h-full flex justify-center items-center">
          <img
            className="object-cover w-full"
            src={`${imgNodeUrl}/images/products/cat1-can7.jpg`}
            alt="carousel"
          />
        </div>
        <div className="h-full flex justify-center items-center ">
          <img
            className="object-cover w-full"
            src={`${imgNodeUrl}/images/products/dog-can1.jpg`}
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
      <div className="w-36 md:w-48 mx-auto py-5">
        <ul className="flex justify-between items-center">
          <li
            className="text-xl font-medium text-blue-400 hover:text-blue-600"
            onClick={() => {
              slider.current.slickPrev()
            }}
          >
            <i className="fa-solid fa-backward"></i>
          </li>

          <li
            className="text-2xl font-medium text-blue-400 hover:text-blue-600"
            onClick={toggleAutoplay}
          >
            {autoplay ? (
              <i className="fa-solid fa-pause"></i>
            ) : (
              <i className="fa-solid fa-play"></i>
            )}
          </li>
          <li
            className="text-xl font-medium text-blue-400 hover:text-blue-600"
            onClick={() => {
              slider.current.slickNext()
            }}
          >
            <i className="fa-solid fa-forward"></i>
          </li>
        </ul>
      </div>
    </div>
  )
}
