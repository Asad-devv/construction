import React from "react";
import Carousel from "nuka-carousel";
import LazyLoad from 'react-lazy-load';


const Card = ({ imageUrl, heading }) => {
  return (
<div className="w-full shadow-xl mx-4 my-7 transition hover:scale-105 bg-gradient-to-b from-[#1c116a] to-[#5e548e] rounded-xl sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
  <div className="overflow-hidden">
    <img
      className="w-120 h-120 mb-5 rounded-[1.2rem] p-2 object-cover"
      src={imageUrl}
      alt={heading}
    />
    <div className="px-4 pb-4">
      <h3 className="font-medium mb-3 text-[1.2rem] text-white">{heading}</h3>
      <p className="text-gray-300">Al sombola offers a wide range of projects that are Lorem ipsum dolor sit, amet consectetur adipisicing </p>
      <a href="#" className="inline-block py-2 px-4 mt-4 rounded-md text-black bg-gray-100 hover:bg-red-600 transition-colors duration-300 shadow-md">
        Learn More
      </a>
    </div>
  </div>
</div>

  
  );
};

const App = ({ projects, heading, subtext }) => {
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
    <div id={heading} className="mt-[10rem] flex flex-col justify-center">
      <div className="px-5 items-center flex flex-col justify-center">
        <h1 className="lg:text-[4rem]   text-slate-900 font-bold sm:text-[2rem] text-[2rem]">
          {heading}.
        </h1>
        <p className="mb-10 text-center self-start text-[1.2rem] text-gray-800">{subtext}</p>
      </div>
      <Carousel
        renderCenterLeftControls={renderControlsLeft}
        renderCenterRightControls={renderControlsRight}
        autoplay={true}
        wrapAround={true}
        autoplayInterval={900}
        // style={{ height: "80vh" }}
      >
        {projects.map((project, i) => {
          return (
            <div className=" relative">

              <img
                src={project.img}
                alt="image"
                className=" md:h-[85vh] lg:h-[85vh] h-[60vh] sm:h-[75vh]  sm:object-fill w-full  	 object-fill"
                key={i}
              />

              
            </div>
          );
        })}
      </Carousel>

      <div className="flex mt-10 lg:px-5 md:px-5 sm:px-10 flex-wrap justify-center">
        {projects.map((project,i) => {
          return (
            <Card
              imageUrl={project.img}
              heading={project.name ? project.name : "AL Sonbola Projects"}
              key={i}
            />
          );
        })}
      </div>
   
    </div>
  );
};

export default App;
