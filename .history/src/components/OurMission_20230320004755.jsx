import React from 'react'

const OurMission = () => {
  return (
    <div class="flex flex-col lg:flex-row items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div class="lg:w-1/2 lg:pr-10 mb-6 lg:mb-0">
      <h2 class="text-3xl font-bold mb-4">Our Mission</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        euismod tincidunt orci, vel facilisis mauris laoreet non.
        Suspendisse potenti. Vestibulum ultrices ligula et urna semper,
        ac blandit erat ultrices. Ut vel sem eget enim aliquam maximus.
      </p>
      <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Learn More
      </a>
    </div>
    <div className="lg:w-1/2">
      <img class="object-cover object-center rounded-lg shadow-md" src="https://images.unsplash.com/photo-1607998704587-9c70d73682a5" alt="Mission Image"/>
    </div>
  </div>
  
  )
}

export default OurMission