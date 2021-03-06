import React from "react";

export default function SubSection({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 rounded-full bg-primary bg-opacity-50 flex items-center justify-center lg:w-20 lg:h-20">
        {icon}
      </div>
      <h1 className="text-2xl font-extrabold text-white text-center my-4 sm:text-3xl lg:text-4xl">
        {title}
      </h1>
      <p className="max-w-sm sm:max-w-screen-sm font-extralight text-center text-white lg:text-lg">
        {description}
      </p>
    </div>
  );
}
