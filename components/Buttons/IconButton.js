import React from "react";

export default function IconButton({ icon, dark, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`w-10 h-10 flex items-center justify-center rounded-lg ${
        dark
          ? "bg-secondary-light hover:bg-secondary"
          : "bg-primary hover:bg-primary-dark"
      }`}
    >
      {icon}
    </div>
  );
}