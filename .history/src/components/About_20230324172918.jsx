import React from "react";

const OurMission = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center sm:px-10  px-10 md:px-10 lg:px-10  py-12 md:py-24">
      <h2 className=" lg:text-[3rem] md:text-[3rem] text-[1.5rem]  font-black mb-8">About us</h2>

      <div className="flex flex-col md:flex-row-reverse items-center md:justify-center lg:max-w-7xl md:space-x-12">
        <div className="flex-1 mb-8 md:mx-10 lg:mx-10 md:mb-0 sm:mx-10 md:mr-16">
   
       
          <p className="text-[1rem] ">
            AL SONBOLA CONTRACTING EST.is committed to provide excellent
            stakeholder value, through its well designed and established service
            delivery system that is sensitive and accommodative to continuous
            technology upgradation and value analysis.
            <br />
            <br />
            Towards achieving this objective, the company shall put strong
            emphasis on effective Planning Systems to ensure that project
            schedules are met with.
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
