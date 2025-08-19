import React from "react";

const services = [
  {
    heading: "Commercial Building Construction",
    text: "End-to-end services for constructing high-quality commercial buildings.",
  },
  {
    heading: "Infrastructure Works",
    text: "Expertise in large-scale infrastructure works, adhering to strict quality and safety standards",
  },
  {
    heading: "Maintenance Services",
    text: "Maintenance services for smooth operation of government offices and commercial projects."
  }, {
    heading: "Interior/Exterior Design",
    text: " Customized design solutions transforming commercial and residential spaces."
  },
  {
    heading: "Fit Out Works",
    text: "Provide Smooth Fit out works for commercial offices and homes."
  }
];

const Services = () => {
  return (
    <div>
      <div className="text-white flex flex-col justify-centear  bg-[#252562] items-acenter items-center justify-center   py-20 md:py-25">
        <h2 className="text-4xl font-black mt-5 ">Our Services</h2>{" "}
        <h3 className="text-[1.5rem] text-gray-400">What we offer</h3>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="max-w-sm cursor-default my-5 hover:scale-110 transition max-h-lg bg-red-800 bag-[#494a80] lg:mx-6 rounded-xl overflow-hidden shadow-xl mx-10"
              >
                
                <div className="px-8 py-6 h-84 flex flex-col justify-center items-acenter">
                <div>
                  <h1 className="text-[4rem]">0{index+1}</h1>
                </div>
                  <div className="font-bold text-2xl mb-4">
                    {service.heading}
                  </div>
                  <p className="text-gray-300 text-lg">{service.text}</p>
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
