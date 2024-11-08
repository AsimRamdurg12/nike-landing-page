import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gsp-2 px-7 py-4 border font-montserrat leading-none text-lg ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="arrow" className="ml-2 w-5 h-5 rounded-full" />
      )}
    </button>
  );
};

export default Button;
