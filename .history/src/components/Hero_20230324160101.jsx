import React from 'react'
import Carousel from "nuka-carousel";
import NavBar from './Navbar';
import { hero,registered } from '../assets';

const images = [{
  tag:'"Transforming spaces and building the future with expertise and innovation."',
  img : "https://media.istockphoto.com/id/981344368/photo/silhouette-of-engineer-and-construction-team-working-at-site-over-blurred-background-sunset.jpg?b=1&s=170667a&w=0&k=20&c=jlejSCmAQhMaO-5ypXbdFDuYHWOkdkvbHr_436sCa8Y="


},{
  tag: "Established in 2013  ." ,
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
          <div className='relative text-center'>
          <img
            src={image.img}
            alt="image"
            className="md:h-[85vh] lg:h-[85vh] h-auto sm:h-[55vh]  sm:object-fill opacity-95
             w-full  bg-blend-darken	 lg:object-fill"
            key={i}
          />
               <div className="absolute opacity-100 inset-0  flex flex-col justify-center items-center z-10">
                
                <h1 className={"lg:text-[5rem] sm:text-md text-white px-10 pb-5 font-bold">{image.tag}</h1>
                <button className={`bg-blue-900 z-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full cursor-pointer`}><a id="contact" className='cursor-pointer'>Contact US now</a></button>
              </div>
              
          </div>
        );
      })}

    </Carousel>

  </>
  )
}



export default Hero