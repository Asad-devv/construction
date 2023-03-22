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
  return (
    <div className="flex mt-10 lg:px-20 md:px-20 sm:px-10 flex-wrap justify-center">
      {completedProjects.map((project, index) => {
        return (
          <div className=" w-1/2  md:w-1/3 px-2 mb-4" key={index}>
            <Card
              imageUrl={project.img}
              heading={project.name ? project.name : "AL Sambola Projects"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;