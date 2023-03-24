import React from "react";

const OurMission = () => {
  return (
    <div className="flex flex-col items-center justify-center sm:px-10  px-10 md:px-10 lg:px-10  py-12 md:py-24">
      <h2 className=" lg:text-[3rem] md:text-[3rem] text-[1.5rem]  font-black mb-8">
        About us
      </h2>

      <div className="flex flex-col md:flex-row-reverse items-center md:justify-center lg:max-w-7xl md:space-x-12">
        <div className="flex-1 mb-8 md:mx-10 lg:mx-10 md:mb-0 sm:mx-10 md:mr-16">
          <p className="text-[1rem] ">
            Established in 2013 as a Construction Business with the Mother
            Company Name M/s Haidar Abdulla Contracting Established in 1960,
            Over the years, the family business has undertaken many challenging
            projects of Construction,<br/><br/> Building Trade and Project Management
            Services. Today, one of the company has role of medium size projects
            and performs contracting and maintenance services in the market for
            Villas, medium size buildings,<br/><br/> factories and Ware house projects
            with the name of Al SONBOLA CONTRACTING. We provide the complete
            support with value added experiences in Architecture, engineering,
            planning and execution of any type of construction project.<br/> <br/>Our
            Objective is to provide the “SATISFICATION” to our client with an
            experience of Quality Project Management, Quality Finishes & Quality
            Services. <br/><br/>Our Emphasis on Clear Communication and follow-up
            procedures ensure that Client’s Objectives are top priority in the
            planning and execution of all our processes.
            <br />
            <br />
          </p>
        </div>

        <div className="flex-1 lg:h-[70vh] ml-2 mr-2 sm:h-[50vh] ">
          <img
            src="https://www.westend61.de/images/0000767413pw/construction-worker-talking-to-man-and-woman-on-a-construction-site-ZEF12466.jpg"
            alt="Mission"
            className="w-full rounded-md shadow-lg lg:h-[70vh]  sm:h-[50vh] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
