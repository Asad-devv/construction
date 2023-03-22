import React from "react";

const Projects = ({ heading ,tagline,projects}) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div>{heading}</div>
      <div>{tagline}</div>
      <div>
        {projects.map(()=>{
          return(
            
          )
        })}
      </div>
    </div>
  );
}; 

export default Projects;
