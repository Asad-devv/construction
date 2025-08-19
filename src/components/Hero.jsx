import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Carousel from 'nuka-carousel';
import { hero,hero1 } from '../assets';

const Slide2 = ({ image }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this threshold as needed
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize); // Listen for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="h-full flex-row sm:flex-col md:flex-row xl:flex-row lg:flex-row  flex justify-center items-center relative">
      <div className={`bg-white h-full flex justify-center items-center w-full lg:w-1/2 relative ${isMobile ? 'hidden lg:flex' : 'lg:flex'}`}   style={{ backgroundImage: `url('https://wallpapers.com/images/hd/white-texture-background-4j71zsm4xjuzod2y.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="text-black flex flex-col items-start text-left pl-10 ">
          <p  className="text-lg  font-bold">CONSTRUCTION BUSINESS</p>
          <hr className='w-10 border-2 mb-5 rounded-xl border-red-700 bg-red-700 h-1' />
          <span  className='text-sm font-black'>Established in 2013</span>
          <h1 className="text-6xl font-black mb-4 text-purple-900"    >Build Your <span className='text-red-700'>Dream House</span> With Us</h1>
          <p  className="pr-10 text-md font-medium mb-4">Welcome to <b className='text-gray-700'>AL SONBOLA CONTRACTING</b>, where quality architecture is our primary goal. With a steadfast commitment to client satisfaction, we build trust through excellence in every construction project we undertake.</p>
          <div className="flex justify-center items-center mt-4">
            <button className="bg-blue-900 font-bold text-white px-3 py-3 mr-5" onClick={() => window.location.href='#Completed Projects'}>Contact Us</button>
              <button className="bg-red-800 font-bold text-white px-3 py-3" onClick={() => window.location.href='#contact'} >See Projects</button>
            </div>
        </div>
      </div>
      <div className="h-full w-full lg:w-1/2 relative">
        <img src={image} alt="Slide 2" className="h-full w-full object-cover" />
        <div className="h-full w-full  absolute top-0 left-0 bg-gradient-to-br from-blue-300 to-red-700  opacity-80"></div>
        {isMobile && (
          <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-centers p-3">
            <p  className="text-white text-md font-bold ">CONSTRUCTION BUSINESS</p>
            <hr className='w-20  border-2 mb-5 rounded-xl border-red-700 bg-red-700 h-1'/>
            <h1  className="text-4xl font-black mb-4 text-center text-blue-900"><span className='text-whiste'>Build </span>Your <span className='text-white'>Dream</span>
            <span className='text-white'> House</span> <span className='text-whdite'>With</span> Us</h1>
            <p className="text-sm text-center text-gray-300 font-bold mb-4">Welcome to <b className='text-gray-200' >AL SONBOLA CONTRACTING</b>, where quality architecture is our primary goal. With a steadfast commitment to client satisfaction</p>
            <div className="flex justify-center items-center mt-4">
            <button className="bg-blue-900 font-bold text-white px-3 py-3 mr-5" onClick={() => window.location.href='#Completed Projects'}>Contact Us</button>
              <button className="bg-red-800 font-bold text-white px-3 py-3" onClick={() => window.location.href='#contact'} >See Projects</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


const Slide3 = ({ title, description, image }) => {
  // Array of company registrations
  const companyRegistrations = [
    { id: 1, registration: 'Registered with DM for civil works.' },
    { id: 2, registration: 'Registered with DEWA for Electrical and water works.' },
    { id: 3, registration: 'Registered With Tejarri/ JAGGAER System for government Works.' },
    { id: 4, registration: 'Registered With Sheikh Mohammad Bin Rashid Housing Scheme.' },
    { id: 5, registration: 'Registered With E-Supply Government System.' },
    { id: 6, registration: 'Registered With SH. Zayed Housing Program.' },
    { id: 7, registration: 'Registered with Dubai Airport Freezone for Civil and Maintenance work.' }
  ];

  return (
    <div className="w-screen bg-white h-screen flex justify-center items-center relative">
      <div style={{ pointerEvents: 'none' }} className="w-full h-screen relative">
        <img src={image} style={{ pointerEvents: 'none' }} alt="Slide 3" className=" w-full h-full object-cover" />
        <div style={{ pointerEvents: 'none' }} className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-transparent to-gray-900 text-white text-center">
          <h2 className=" text-xl sm:text-xl md:text-4xl lg:text-4xl pt-3   font-black  text-white">Registered Business</h2>
          <p  className="px-2 text-sm sm:text-sm  lg:text-lg xl:text-md     italic sm:text-md  text-slt-900 font-bold ">Al Sonbola contracting is associated and Registered with multiple vendors </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1   gap-2 p-4">
            {companyRegistrations.map(company => (
              <div key={company.id}  className="bg-red-900 opacity-80 border-2 border-gray-300 px-2 py-1  flex items-center  text-white rounded-sm">

                
                <img src="https://cdn.pixabay.com/photo/2013/07/12/18/22/check-153363_640.png" className="sm:w-3 sm:hidden hidden lg:block md:block xl:block  sm:h-3 w-3 h-3 lg:w-7 lg:h-7 md:w-7  md:h-7 mr-1" alt="Check Icon" />
                <h2 className=" text-xs sm:text-sm  lg:text-lg xl:text-md   sm:font-thin  sm:text-md font-bold mr-1">0{company.id}.</h2>
                <p className=" text-xs sm:text-lg lg:text-lg xl:text-lg   sm:font-thin font-bold">{company.registration}</p>
                
              </div>
            ))}
            <div className="flex justify-center items-center mt-4">
            <button className="bg-blue-900 font-bold text-white px-3 py-3 mr-5" onClick={() => window.location.href='#Completed Projects'}>Contact Us</button>
              <button className="bg-red-800 font-bold text-white px-3 py-3" onClick={() => window.location.href='#contact'} >See Projects</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SlideShow = () => {

  const renderControlsLeft = ({ previousSlide }) => (
    <div className="controls">
      <button onClick={previousSlide}>
        <svg className="pl-5" width="70" height="70" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>
    </div>
  );
  const renderControlsRight = ({ nextSlide }) => (
    <div className="controls">
      <button onClick={nextSlide}>
        <svg className="pl-5" width="70" height="70" viewBox="0 0 24 24">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>
    </div>
  );

  

  return (
    <div className="relative h-screen ">


      <Carousel       renderCenterLeftControls={renderControlsLeft}
      renderCenterRightControls={renderControlsRight}
      autoplay={true}
      wrapAround={true}
      autoplayInterval={5000} >


<div className='w-full h-screen'>    

<Slide2 image={hero}/></div>
<div className='w-full h-screen'>    
    <Slide3 image="https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
      </Carousel>
    </div>
  );
};

export default SlideShow;
  