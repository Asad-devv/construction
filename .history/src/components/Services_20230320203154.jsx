import React from "react";

const services = [
  {
    heading: "Service 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    heading: "Service 2",
    text: "Nullam vitae lectus nec magna tristique maximus eu vel eros.",
  },
  {
    heading: "Service 3",
    text: "Fusce sed malesuada libero. Donec luctus elit id lorem egestas, vel tincidunt sapien fringilla.",
  },
];

const Services = () => {
  return (
    <div>
      <div className="text-white flex flex-col justify-centear  bg-[#252562] items-acenter items-center justify-center   py-20 md:py-30">
        <h2 className="text-[3rem] font-black mt-10 ">Our Services</h2>{" "}
        <h3 className="text-[1.5rem] text-gray-400">What we offer</h3>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="max-w-sm my-20 hover:scale-100 max-h-lg bg-[#494a80] rounded-xl overflow-hidden shadow-lg m-4"
              >
                
                <div className="px-8 py-6 h-84 flex flex-col justify-center items-acenter">
                <div>
                  <h1 className="text-[4rem]">0{index+1}</h1>
                </div>
                  <div className="font-bold text-2xl mb-4">
                    {service.heading}
                  </div>
                  <p className="text-gray-400 text-lg">{service.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
