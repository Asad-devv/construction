import React from 'react'
import Carousel from "nuka-carousel";
import NavBar from './Navbar';
import { hero } from '../assets';

const images = [
    "https://images.unsplash.com/photo-1575281923032-f40d94ef6160?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    hero,
    "https://i.pinimg.com/564x/2d/8b/a5/2d8ba56af0950401fe3e332195eba9a1.jpg",
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
    <div className="relative h-80">

    <Carousel
      renderCenterLeftControls={renderControlsLeft}
      renderCenterRightControls={renderControlsRight}
      autoplay={true}
      wrapAround={true}
      autoplayInterval={3000}
      style={{ height: "100vh" }}
      className="absolute top-0 left-0 w-full h-full"

    >
      {images.map((image, i) => {
        return (
          <img
            src={image}
            alt="image"
            className="h-[77vh] w-full  bg-blend-darken	 object-fill"
            key={i}
            style={{ backgroundColor: i == 1 ? "#89CFF0" : "#8B0000" }}
          />
        );
      })}

      <h1>HI asjkas sjajsakgasaskasaskakgsgag</h1>
    </Carousel>
    <div className="absolute inset- h-full bg-gradient-to-b from-transparent to-blue-200 opacity-50"></div>
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <h1 className="text-4xl font-bold text-white">Some text here</h1>
        </div>
      </div>

  </>
  )
}



export default Hero