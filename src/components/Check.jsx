import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:col-span-1">
            <h1 className="text-4xl lg:text-6xl text-white font-bold mb-4">Welcome to our Construction Company</h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8">We build the future with excellence and innovation.</p>         
               <button className="bg-white text-blue-500 hover:bg-blue-600 hover:text-white py-3 px-8 rounded-full font-bold">Learn More</button >
          </div>
          <div className="md:col-span-1">
            <img className="w-full h-auto" src="/hero-image.jpg" alt="Construction Company" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
