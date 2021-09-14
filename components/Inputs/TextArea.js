import React from "react";
import classNames from "classnames";

const textAreaThemeClasses = (variant) =>
  classNames({
    "bg-white border-primary border-opacity-50 border-2 focus:outline-none placeholder-transparent": !variant,
    "bg-secondary-light text-white focus:outline-none placeholder-transparent": variant,
  });

const labelThemeClasses = (variant) =>
  classNames({
    "bg-white text-primary text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2.5": !variant,
    "text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2.5": variant,
  });

export default function TextArea({ placeholder, dark, onChange }) {
  return (
    <div className="relative">
      <textarea
        id={placeholder}
        className={`peer py-2 px-3 rounded-xl resize-none ${textAreaThemeClasses(
          dark
        )}`}
        rows={2}
        placeholder={placeholder}
      />
      <label
        htmlFor={placeholder}
        className={`absolute transition-all px-1 left-2 -top-2.5 ${labelThemeClasses(
          dark
        )}`}
      >
        Email address
      </label>
    </div>
  );
}
