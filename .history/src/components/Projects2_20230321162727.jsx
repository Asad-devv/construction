import React from "react";

const Card = ({ imageUrl, heading }) => {
  return (
    <div className="md:flex bg-white rounded-lg p-6">
      <img
        className="h-48 w-full md:w-48 md:h-auto md:rounded-none rounded-lg mx-auto"
        src={imageUrl}
        alt={heading}
      />
      <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
        <h3 className="font-bold text-xl">{heading}</h3>
      </div>
    </div>
  );
};
