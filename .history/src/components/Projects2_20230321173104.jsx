import React from "react";

const Card = ({ imageUrl, heading }) => {
  return (
    <div className="w-full  sm:w-1/2 md:w-1/3 px-2 mb-4">
      <div className="bg- rounded-lg overflow-hidden shadow-md">
        <img className="w-full h-56 object-cover" src={imageUrl} alt={heading} />
        <div className="p-4">
          <h3 className="font-bold text-xl mb-2">{heading}</h3>
        </div>
      </div>
    </div>
  );
};

const App = ({ completedProjects }) => {
  return (
    <div className="flex flex-wrap justify-center">
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