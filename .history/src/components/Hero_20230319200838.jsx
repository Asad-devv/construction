import React from 'react'
import Carousel from "nuka-carousel";



const images = [
    "https://media.istockphoto.com/id/1267010934/photo/experienced-engineer-explaining-the-problems-in-construction-works-development-after-recession.jpg?s=612x612&w=0&k=20&c=kSbguQRPqhgKgYzy-P-e1ScLXBXWszQn1JimPfE4aWk=",
    "https://i.pinimg.com/564x/d1/0a/94/d10a94c706c76d5d5a1433a449ec96c0.jpg",
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
    <Carousel
      renderCenterLeftControls={renderControlsLeft}
      renderCenterRightControls={renderControlsRight}
      autoplay={true}
      wrapAround={true}
      autoplayInterval={3000}
      style={{ height: "80vh" }}
    >
      {images.map((image, i) => {
        return (
          <img
            src={image}
            alt="image"
            className="h-[85vh] w-full  bg-blend-darken	 object-contain sm:object-fill   "
            key={i}
            style={{ backgroundColor: i == 1 ? "#89CFF0" : "#8B0000" }}
          />
        );
      })}
    </Carousel>

  </>
  )
}



export default Hero