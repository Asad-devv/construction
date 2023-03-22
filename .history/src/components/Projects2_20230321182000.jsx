import React from "react";

const Card = ({ imageUrl, heading }) => {

  return (
    <div className="w-full shadow-xl  sm:w-1/2 md:w-1/3 px-2 mb-4">
      <div className="bg-gray-200  rounded-lg overflow-hidden shadow-md">
        <img className="w-full h-full  object-cover" src={imageUrl} alt={heading} />
        <div className="p-4">
          <h3 className="font-bold text-xl mb-2">{heading}</h3>
        </div>
      </div>
    </div>
  );
};

const App = ({ completedProjects }) => {
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
          className="h-[85vh] w-full  bg-blend-darken	 object-fill"
          key={i}
          style={{ backgroundColor: i == 1 ? "#89CFF0" : "#8B0000" }}
        />
      );
    })}

    <div className="flex mt-10 lg:px-20 md:px-20 sm:px-10 flex-wrap justify-center">
      {completedProjects.map((project) => {
        return (
          <Card
            imageUrl={project.img}
            heading={project.name ? project.name : "AL Sambola Projects"}
          />
        );
      })}
    </div>
  );
};

export default App;