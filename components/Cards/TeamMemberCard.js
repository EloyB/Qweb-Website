import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsDot } from "react-icons/bs";
import IconButton from "../Buttons/IconButton";

export default function TeamMemberCard({ name, functions, socialLinks }) {
  return (
    <div className="p-6 rounded-xl space-y-3 text-secondary shadow-md">
      <div className="w-full h-52 rounded-xl bg-gray-50"></div>
      <div className="space-y-3">
        <div>
          <h1 className="text-xl font-bold">{name}</h1>
          <div className="flex space-x-2">
            {functions.map((item, index) => {
              return (
                <div className="space-x-2 flex items-center">
                  <p key={index}>{item}</p>
                  {index < functions.length - 1 ? <BsDot /> : null}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex space-x-3">
          <IconButton
            icon={<FaFacebookSquare className="text-white w-6 h-6" />}
          />
          <IconButton icon={<FaInstagram className="text-white w-6 h-6" />} />
          <IconButton icon={<HiOutlineMail className="text-white w-6 h-6" />} />
        </div>
      </div>
    </div>
  );
}
