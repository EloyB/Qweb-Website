import React from "react";

export default function MainSection({ icon, title, description, reverse }) {
  return (
    <div
      className={`flex flex-col py-16 ${
        reverse ? "items-end text-right" : "items-start text-left"
      }`}
    >
      <div className="w-14 h-14 rounded-full bg-primary bg-opacity-50 flex items-center justify-center lg:w-20 lg:h-20">
        {icon}
      </div>
      <h1 className="text-2xl font-extrabold text-secondary my-4 sm:text-3xl lg:text-4xl">
        {title}
      </h1>
      <p className="max-w-screen-md lg:text-xl">{description}</p>
    </div>
  );
}
