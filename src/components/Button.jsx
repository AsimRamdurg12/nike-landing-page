import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gsp-2 px-7 py-4 border font-montserrat leading-none text-lg bg-coral-red rounded-full text-white">
      {label}
      <img src={iconURL} alt="arrow" className="ml-2 w-5 h-5 rounded-full" />
    </button>
  );
};

export default Button;
