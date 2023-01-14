import React from 'react'
import { Link } from 'react-router-dom'

import { imgNodeUrl } from '../../my-config'

function HomeCarousel() {
  return (
    <div className="my-5 pt-5 bg-white w-full border shadow-md rounded-lg">
      <div className="h-full flex justify-center items-center">
        <img
          className="object-cover"
          src={`${imgNodeUrl}/images/products/can1.jpg`}
          alt="carousel"
        />
      </div>
      <div className="w-36 md:w-48 mx-auto py-5">
        <ul className="flex justify-between items-center">
          <li className="text-xl font-medium text-blue-400 hover:text-blue-600">
            <i class="fa-solid fa-backward"></i>
          </li>
          <li className="text-xl font-medium text-blue-400 hover:text-blue-600">
            <i class="fa-solid fa-play"></i>
          </li>
          <li className="text-xl font-medium text-blue-400 hover:text-blue-600">
            <i class="fa-solid fa-forward"></i>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HomeCarousel
