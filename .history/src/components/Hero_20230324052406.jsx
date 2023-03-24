import React from 'react'
import Carousel from "nuka-carousel";
import NavBar from './Navbar';
import { hero,registered } from '../assets';

const images = [{
  tag:"find best forget out there",
  img : "https://images.unsplash.com/photo-1575281923032-f40d94ef6160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"


},{
  tag: "Established in 2013 as a Construction Business with the Mother Company Name M/s Haidar Abdulla Contracting Established in 1960, ." ,
  img : hero


},{
  tag:"Registered Business with Different Organization" ,
  img : registered


},
  ];
  

const Hero = () => {
    const renderControlsLeft = ({ previousSlide }) => (
        <div className="controls">
          <button onClick={previousSlide}>
            <svg className="pl-5" width="100" height="70" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
        </div>
      );
      const renderControlsRight = ({ nextSlide }) => (
        <div className="controls">
          <button onClick={nextSlide}>
            <svg className="pl-5" width="100" height="70" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>
      );
  return (
    <>
    <NavBar/>
    <Carousel
      renderCenterLeftControls={renderControlsLeft}
      renderCenterRightControls={renderControlsRight}
      autoplay={true}
      wrapAround={true}
      autoplayInterval={3000}
      // style={{ height: "80vh" }}
      className="h-[20vh]"
    >
      {images.map((image, i) => {
        return (
          <div className='relative'>
          <img
            src={image.img}
            alt="image"
            className="h-[55vh]  sm:object-fill
             w-full  bg-blend-darken	 lg:object-fill"
            key={i}
          />
               <div className="absolute opacity-100 inset-0  flex flex-col justify-end items-center">
                {/* <h1 className="lg:text-2xl sm:text-md text-black px-5 pb-10 font-bold">{image.tag}</h1> */}
              </div>
              
          </div>
        );
      })}

    </Carousel>

  </>
  )
}



export default Hero