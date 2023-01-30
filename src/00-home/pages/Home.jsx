import React from 'react'
import { Link } from 'react-router-dom'
import { imgNodeUrl } from '../../my-config'

import TeamMemberCard from '../components/TeamMemberCard'
import HomeCarousel from '../components/HomeCarousel'
import HomeSlider from '../components/HomeSlider'

function Home() {
  return (
    <div className="pt-24">
      <section className="px-16 mb-8">
        {/* <HomeCarousel /> */}
        <HomeSlider />
      </section>
      {/* <div>Home</div> */}
      <section>
        <header className="text-center mx-auto mb-12">
          <h3 className="text-2xl leading-normal mb-2 font-bold text-gray-800 ">
            Our Team
          </h3>
        </header>
        <div class="max-w-720 flex flex-wrap flex-row justify-center sm:mx-1 md:mx-5">
          {Array(4)
            .fill(1)
            .map((c, i) => (
              <TeamMemberCard key={i} />
            ))}
        </div>
      </section>
    </div>
  )
}

export default Home
