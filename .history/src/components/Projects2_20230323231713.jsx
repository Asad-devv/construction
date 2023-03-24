import React from "react";
import Carousel from "nuka-carousel";

const Card = ({ imageUrl, heading }) => {
  return (
    <div className="w-full shadow-xl mx-4 my-7 transition hover:scale-105  sm:w-1/2 md:w-1/3  px-2 mb-4">
      <div className="bg-gray-200  rounded-lg overflow-hidden shadow-md">
        <img
          className="w-full h-full  object-cover"
          src={imageUrl}
          alt={heading}
        />
        <div className="p-4">
          <h3 className="font-bold text-xl mb-2">{heading}</h3>
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
    <div className="mt-20 flex flex-col justify-center">
      <div className="px-10 items-center flex flex-col justify-center">
        <h1 className="lg:text-[4rem] text-slate-900 sm:text-[2rem] text-[2rem]">
          {heading}
        </h1>
        <p className="mb-10 text-gray-600">{subtext}</p>
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
            <div className="relative">
              <img
                src={project.img}
                alt="image"
                className="h-[85vh] w-full  bg-blend-darken	 object-fill"
                key={i}
              />
              <div className="absolute opacity-60 inset-0 bg-gradient-to-b from-transparent to-blue-300 flex flex-col justify-center items-center">
                <h1 className="text-4xl text-">{project.name}</h1>
              </div>
            </div>
          );
        })}
      </Carousel>

      <div className="flex mt-10 lg:px-5 md:px-5 sm:px-10 flex-wrap justify-center">
        {projects.map((project) => {
          return (
            <Card
              imageUrl={project.img}
              heading={project.name ? project.name : "AL Sambola Projects"}
            />
          );
        })}
      </div>
   
    </div>
  );
};

export default App;
