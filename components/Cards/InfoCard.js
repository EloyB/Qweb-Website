import React from "react";

export default function InfoCard({ title, description, icon, dark }) {
  return (
    <div
      className={`rounded-xl shadow-md p-8 flex space-x-5 ${
        dark ? "bg-secondary-light text-white" : "bg-white text-secondary"
      }`}
    >
      <div>
        <div className="w-12 h-12 rounded-xl bg-primary bg-opacity-30 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-xl font-extrabold">{title}</h1>
          <p className="text-sm font-light">{description}</p>
        </div>
      </div>
    </div>
  );
}
