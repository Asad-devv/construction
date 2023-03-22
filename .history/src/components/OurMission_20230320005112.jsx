import React from 'react'

const OurMission = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div className="lg:w-1/2 lg:pr-10 mb-6 lg:mb-0">
      <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        euismod tincidunt orci, vel facilisis mauris laoreet non.
        Suspendisse potenti. Vestibulum ultrices ligula et urna semper,
        ac blandit erat ultrices. Ut vel sem eget enim aliquam maximus.
      </p>
      <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Learn More
      </a>
    </div>
    <div classNameName="lg:w-1/2">
      <img className="object-cover object-center rounded-lg shadow-md" src="https://www.betterteam.com/images/construction-worker-job-description-3481x2535-20201117.jpeg?crop=4:3,smart&width=1200&dpr=2" alt="Mission Image"/>
    </div>
  </div>
  
  )
}

export default OurMission