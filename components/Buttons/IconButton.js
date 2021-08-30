import React from "react";

export default function IconButton({ icon, dark }) {
  return (
    <div
      className={`p-2 rounded-lg ${
        dark
          ? "bg-secondary-light hover:bg-secondary"
          : "bg-primary hover:bg-primary-dark"
      }`}
    >
      {icon}
    </div>
  );
}
