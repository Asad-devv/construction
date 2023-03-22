import React from "react";

const Projects = ({ heading }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div>{heading}</div>
      <div>{tagline}</div>
    </div>
  );
};

export default Projects;
