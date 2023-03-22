import React from 'react';
// import bgImage from './bgImage.jpg';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ContactUs = () => {
  return (
    <div className="flex justify-between h-screen">
      {/* Left section */}
      <div
        className="w-1/2 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url` }}
      >
        <div className="flex items-center justify-around w-full">
          <div className="flex flex-col items-center">
            <CircularProgressbar
              value={80}
              text="Completed Projects"
              strokeWidth={5}
              styles={buildStyles({
                strokeLinecap: 'butt',
                pathColor: '#3B82F6',
                textColor: '#3B82F6',
              })}
            />
            <p className="text-gray-500 mt-2">80%</p>
          </div>
          <div className="flex flex-col items-center">
            <CircularProgressbar
              value={10}
              text="Ongoing Projects"
              strokeWidth={5}
              styles={buildStyles({
                strokeLinecap: 'butt',
                pathColor: '#F87171',
                textColor: '#F87171',
              })}
            />
            <p className="text-gray-500 mt-2">10%</p>
          </div>
          <div className="flex flex-col items-center">
            <CircularProgressbar
              value={90}
              text="Satisfied Clients"
              strokeWidth={5}
              styles={buildStyles({
                strokeLinecap: 'butt',
                pathColor: '#10B981',
                textColor: '#10B981',
              })}
            />
            <p className="text-gray-500 mt-2">90%</p>
          </div>
        </div>
      </div>
      {/* Right section */}
      <div className="w-1/2 flex items-center justify-center">
        {/* Contact form goes here */}
      </div>
    </div>
  );
};

export default ContactUs;
