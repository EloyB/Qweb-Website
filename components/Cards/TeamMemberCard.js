import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import IconButton from "../Buttons/IconButton";

export default function TeamMemberCard() {
  return (
    <div className="p-6 rounded-xl space-y-3 text-secondary shadow-md">
      <div className="w-full h-52 rounded-xl bg-gray-50"></div>
      <div className="space-y-3">
        <div>
          <h1 className="text-xl font-bold">Name LastName</h1>
          <div className="flex space-x-3">
            <p>Co-Founder</p>
            <p>Designer</p>
            <p>Developer</p>
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
