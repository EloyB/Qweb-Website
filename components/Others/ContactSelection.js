import React from "react";

export default function ContactSelection({
  icon,
  index,
  selectedIndex,
  title,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center space-x-6 px-6 py-4 rounded-xl bg-secondary-light ${
        index === selectedIndex ? "ring-2 ring-white ring-opacity-50" : "ring-0"
      } `}
    >
      {icon}
      <p className="text-white text-lg ">{title}</p>
    </div>
  );
}
