import React from "react";
import { FiCheckSquare } from "react-icons/fi";

export default function FeaturesCard({ title, icon, features }) {
  return (
    <div className="rounded-xl shadow-md p-8 flex space-x-5">
      <div>
        <div className="w-12 h-12 rounded-xl bg-primary bg-opacity-30 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-extrabold">{title}</h1>
        <div className="space-y-2">
          {features.map((item, index) => (
            <div className="flex space-x-3">
              <FiCheckSquare className="w-5 h-5 text-green flex-none" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
