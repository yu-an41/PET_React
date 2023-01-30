import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="flex w-full items-center justify-between border-2 bg-gray-200 p-5 fixed bottom-0 left-0 h-24">
      <ul className="max-w:96 flex justify-center align-center list-none mx-auto pb-1 border-b-2 border-blue-500">
        <li className="text-xl mx-2 text-gray-700 hover:text-orange-700">
          <Link to="/#">
            <i class="fa-brands fa-facebook"></i>
          </Link>
        </li>
        <li className="text-xl mx-2 text-gray-700 hover:text-orange-700">
          <Link to="/#">
            <i class="fa-brands fa-instagram"></i>
          </Link>
        </li>
        <li className="text-xl mx-2 text-gray-700 hover:text-orange-700">
          <Link to="/#">
            <i class="fa-brands fa-github"></i>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer
