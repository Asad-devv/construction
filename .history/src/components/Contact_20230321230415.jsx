import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ContactUs = () => {
  return (
    <div>
      <div className="bg-[url('https://www.westend61.de/images/0001363515pw/construction-workers-working-at-site-EYF04597.jpg')] bg-no-repeat bg-cover bg-center bg-blend-soft-light	 flex lg:flex-row-reverse sm:flex-col-reverse  bg-blue-900 justify-center mix-blend-multiply items-center   h-[80vh]">
        {/* <h1>Contact US Now to build your dream project</h1> */}
        <div
          className="bg-contain w-1/2"
          style={{ backgroundImage: `url('/background.jpg')` }}
        >
          <div className="h-full flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <form className="flex flex-col w-full max-w-md">
              <label htmlFor="name" className="text-lg mb-2">
                Name:
              </label>
              <input
                id="name"
                type="text"
                className="bg-gray-200 rounded-lg mb-4 py-2 px-4"
              />

              <label htmlFor="email" className="text-lg mb-2">
                Email:
              </label>
              <input
                id="email"
                type="email"
                className="bg-gray-200  rounded-lg mb-4 py-2 px-4"
              />

              <label htmlFor="message" className="text-lg mb-2">
                Message:
              </label>
              <textarea
                id="message"
                className="bg-gray-200 rounded-lg mb-4 py-2 px-4"
              ></textarea>

              <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className=" mx-10 w-1/2 gap-4 bg-gray-2a00 flex flex-row items-center justify-center">
          <div className="w-50 mt-8">
            <CircularProgressbar
              value={75}
              text={`${75}%`}
              strokeWidth={5}
              styles={buildStyles({
                textSize: "20px",
                textColor: "lightgrey",
                trailColor: "white",
                pathColor: "#00b0ff",
              })}
            />
            <p className="text-center text-[1.5rem] text-white mt-2">
              Completed Projects
            </p>
          </div>

          <div className="w-50 mt-8">
            <CircularProgressbar
              value={50}
              text={`${50}%`}
              strokeWidth={5}
              styles={buildStyles({
                textSize: "20px",
                textColor: "lightgrey",
                trailColor: "#white",
                pathColor: "#00b0ff",
              })}
            />
            <p className="text-center text-[1.5rem] text-white">
              Ongoing Projects
            </p>
          </div>

          <div className="w-50 mt-8">
            <CircularProgressbar
              value={95}
              text={`${95}%`}
              strokeWidth={5}
              styles={buildStyles({
                textSize: "20px",
                textColor: "lightgrey",
                trailColor: "#white",
                pathColor: "#00b0ff",
              })}
            />
            <p className="text-center text-[1.5rem]  text-white">
              Satisfied Clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
