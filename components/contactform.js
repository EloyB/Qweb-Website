import React from "react";

export default function Contactform() {
  return (
    <div>
      <div className="w-full my-4">
        <input
          type="text"
          placeholder="Email"
          className="outline-none bg-secondary-light py-4 px-6 rounded-lg text-white w-full"
        />
      </div>
      <div className="w-full my-4">
        <input
          type="text"
          placeholder="Name"
          className="outline-none bg-secondary-light py-4 px-6 rounded-lg text-white w-full"
        />
      </div>
      <div className="w-full my-4">
        <textarea
          placeholder="Message"
          rows="7"
          className="outline-none resize-none bg-secondary-light py-4 px-6 rounded-lg text-white w-full"
        ></textarea>
      </div>
      <div className="cursor-pointer w-full py-4 rounded-lg bg-primary">
        <p className="text-white font-medium text-center">Send message</p>
      </div>
    </div>
  );
}
