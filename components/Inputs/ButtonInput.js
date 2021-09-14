import React from "react";
import { HiOutlineMail } from "react-icons/hi";

export default function ButtonInput({ dark }) {
  return (
    <div className="space-x-2 bg-white p-1 rounded-xl flex">
      <input
        type="text"
        className="w-full h-10 px-3 focus:outline-none"
        placeholder="Email"
      />
      <div className="h-10 w-16 rounded-xl bg-primary flex items-center justify-center">
        <HiOutlineMail className="text-white h-6 w-6" />
      </div>
    </div>
  );
}
