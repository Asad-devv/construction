import React from "react";

const Projects = ({ heading, tagline, projects }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div><h1 className="text-[2rem]">{heading}</h1></div>
      <div>{tagline}</div>
      <div className="flex px gap-6 flex-wrap">
        {projects.map((project, index) => {
          return (
            <div key={index} className="max-w-sm  bg-gray-600  rounded overflow-hidden shadow-lg">
              <img className="my-3 w-full px-7 rounded-xl" src={project} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-white text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-100 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
