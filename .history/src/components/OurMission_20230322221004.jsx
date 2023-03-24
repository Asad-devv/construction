import React from "react";

const OurMission = () => {
  return (
    <div className="flex flex-col items-center justify-center  py-12 md:py-24">
      <h2 className="text-[3rem] font-black mb-8">Our Mission</h2>

      <div className="flex flex-col md:flex-row items-center md:justify-center lg:max-w-7xl md:space-x-12">
        <div className="flex-1 mb-8 md:mb-0 md:mr-16">
          {/* <p className="text-gray-600 leading-relaxed text-lg md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eius veniam quam autem laudantium. Perspiciatis, ut. Magnam odit molestiae, vel nihil obcaecati ipsa unde, minima voluptates corporis placeat sapiente, <br/><br/>repellendus exercitationem. Repellat magni sit qui minus veniam nobis amet numquam, quisquam odit accusamus omnis ipsa molestiae modi natus fuga nihil praesentium.<br/><br/> Aspernatur nostrum natus magni, eligendi ab pariatur. Sapiente iure harum exercitationem iusto ipsa? Sit non ab dicta quis eveniet itaque, pariatur voluptatum inventore amet, rem iste. Quia veritatis nemo<br/><br/> eveniet praesentium, ipsum, consectetur pariatur nam doloremque sunt asperiores sequi!
                        </p> */}
          <h2 className="text-blue-700 text-[2rem]">Vision</h2>
          <p className="text-[1rem]">
            To be a reputable Building Contractor delivering beyond the
            expectation.
          </p>
          <h2 className="text-blue-700 text-[2rem]  mt-2">Mission</h2>
          <p className="text-[1rem]">
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
          <h2 className="text-blue-700 text-[2rem]  mt-2">Value Statement</h2>
          <p className='text-[1rem]'>
            Long term success to its customers whose satisfaction is of
            paramount importance. Care towards the employees who carry out their
            responsibilities with the utmost pride and dedication, and
            contribute towards the sustainability of the environment through
            break through initiatives. Vision in adopting long-term corporate
            goals and exploring new business opportunities in the desire to
            achieve sustainable, exponential and dynamic growth for the entire
            group.
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
