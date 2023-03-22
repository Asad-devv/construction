import React from "react";


const services = [
    {
      heading: "Service 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      heading: "Service 2",
      text: "Nullam vitae lectus nec magna tristique maximus eu vel eros."
    },
    {
      heading: "Service 3",
      text: "Fusce sed malesuada libero. Donec luctus elit id lorem egestas, vel tincidunt sapien fringilla."
    }
  ];
  
  

const Services = () => {
  return (
    <div>
      <div className="text-white flex flex-col justify-centear h-[70vh] bg-[#252562] items-acenter items-center justify-center  py-5 md:py-5">
      <h2 className="text-[3rem] font-black ">Our Services</h2>        <h3 className="text-[1.5rem] text-gray-400">What we offer</h3>
      </div>
      <div className="flex flex-wrap justify-center">
      {services.map((service, index) => {
        return(       <div key={index} className="max-w-md rounded overflow-hidden shadow-lg m-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{service.heading}</div>
          <p className="text-gray-700 text-base">{service.text}</p>
        </div>
      </div>)
 
      })}
    </div>
    
    </div>
  );
};

export default Services;
