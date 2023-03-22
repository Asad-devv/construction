import React from "react";

const Projects = ({ heading ,tagline}) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div>{heading}</div>
      <div>{tagline}</div>
      <div>
        {projects}
      </div>
    </div>
  );
}; 

export default Projects;
