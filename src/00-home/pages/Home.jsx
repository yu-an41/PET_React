import React from 'react'
import { Link } from 'react-router-dom'
import { imgNodeUrl } from '../../my-config'

function Home() {
  return (
    <div>
      <section>
        <div className="m-2 bg-white w-full h-96 border shadow-md rounded-lg">
          <div className="h-full flex justify-center items-center">
            <img
              className="h-full"
              src={`${imgNodeUrl}/images/photos/TingStyle_5.jpg`}
              alt="carousel"
            />
          </div>
        </div>
      </section>
      <div>Home</div>
      <section>
        <header className="text-center mx-auto mb-12">
          <h3 className="text-2xl leading-normal mb-2 font-bold text-gray-800 ">
            Our Team
          </h3>
        </header>
        <div class="flex flex-wrap flex-row -mx-4 justify-center">
          <div className="flex flex-col px-2 py-3">
            <div className="w-36 h-36 rounded-full overflow-hidden mb-5">
              <img
                className="w-full"
                src={`${imgNodeUrl}/images/photos/TingStyle_5.jpg`}
                alt="carousel"
              />
            </div>
            <div className="flex flex-col items-center">
              <h5 className="text-lg leading-normal font-bold mb-1">
                Joe Antonio
              </h5>
              <p className="text-gray-500 leading-relaxed font-light">
                Founder CEO
              </p>
              <ul className="flex justify-between w-full px-4">
                <li className="mt-2 mb-5 space-x-2">
                  <Link
                    to="/#"
                    className="hover:text-blue-700"
                    aria-label="Twitter link"
                  >
                    <i class="fa-brands fa-twitter"></i>
                  </Link>
                </li>
                <li className="mt-2 mb-5 space-x-2">
                  <Link
                    to="/#"
                    className="hover:text-blue-700"
                    aria-label="Facebook link"
                  >
                    <i class="fa-brands fa-square-facebook"></i>
                  </Link>
                </li>

                <li className="mt-2 mb-5 space-x-2">
                  <Link
                    to="/#"
                    className="hover:text-blue-700"
                    aria-label="Instagram link"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </Link>
                </li>
                <li className="mt-2 mb-5 space-x-2">
                  <Link
                    to="/#"
                    className="hover:text-blue-700"
                    aria-label="LinkedIn link"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
