import React from 'react'
import { Link } from 'react-router-dom'

import { imgNodeUrl } from '../../my-config'

function TeamMemberCard() {
  return (
    <div className="min-w-240 md:w-1/3 lg:w-1/4 flex flex-col justify-center items-center px-2 py-3">
      <div className="w-36 h-36 rounded-full overflow-hidden mb-5">
        <img
          className="w-full"
          src={`${imgNodeUrl}/images/photos/TingStyle_5.jpg`}
          alt="carousel"
        />
      </div>
      <div className="flex flex-col items-center">
        <h5 className="text-lg leading-normal font-bold mb-1">Joe Antonio</h5>
        <p className="text-gray-500 leading-relaxed font-light">Founder CEO</p>
        <ul className="flex justify-between w-full px-1/2">
          <li className="mt-2 mb-5 space-x-2">
            <Link
              to="/#"
              className="hover:text-blue-700"
              aria-label="Twitter link"
            >
              <i className="fa-brands fa-twitter"></i>
            </Link>
          </li>
          <li className="mt-2 mb-5 space-x-2">
            <Link
              to="/#"
              className="hover:text-blue-700"
              aria-label="Facebook link"
            >
              <i className="fa-brands fa-square-facebook"></i>
            </Link>
          </li>

          <li className="mt-2 mb-5 space-x-2">
            <Link
              to="/#"
              className="hover:text-blue-700"
              aria-label="Instagram link"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </li>
          <li className="mt-2 mb-5 space-x-2">
            <Link
              to="/#"
              className="hover:text-blue-700"
              aria-label="LinkedIn link"
            >
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TeamMemberCard
