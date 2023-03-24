import React from 'react'
import Carousel from "nuka-carousel";
import NavBar from './Navbar';
import { hero,registered } from '../assets';

const images = [{
  tag:"find best forget out there",
  img : "https://images.unsplash.com/photo-1575281923032-f40d94ef6160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"


},{
  tag: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit quam illum odio soluta voluptatum maxime, accusamus enim iure ex quo?" ,
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
    >
      {images.map((image, i) => {
        return (
          <div>
          <img
            src={image.img}
            alt="image"
            className="h-[85vh]  w-full  bg-blend-darken	 object-fill"
            key={i}
          />
              <div className="absolute opacity-10 inset-0 bg-gradient-to-b from-transparent to-blue-300 flex flex-col justify-center items-center">
                
              </div>
              <div className='-pb-[20rem] inset-0 flex justify-center'>   <h1 className="text-4xl text-black z-10">{image.tag}</h1></div>
              <div className='h-[20vh]'></div>
          </div>
        );
      })}

    </Carousel>

  </>
  )
}



export default Hero