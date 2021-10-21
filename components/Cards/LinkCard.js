import { Router, useRouter } from "next/router";
import React from "react";
import LinkButton from "../Buttons/LinkButton";

export default function LinkCard({
  title,
  description,
  linkDescription,
  linkPath,
  icon,
}) {
  const router = useRouter();
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 flex space-x-5 md:space-y-5 md:flex-col md:space-x-0">
      <div>
        <div className="w-12 h-12 rounded-xl bg-primary bg-opacity-30 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="space-y-3 md:space-y-5 md:flex md:flex-1 md:flex-col md:justify-between">
        <div className="md:space-y-3">
          <h1 className="text-xl font-extrabold text-secondary lg:text-2xl">
            {title}
          </h1>
          <p className="text-sm lg:text-base font-light">{description}</p>
        </div>
        <LinkButton
          text={linkDescription}
          onClick={() => router.push(linkPath)}
        />
      </div>
    </div>
  );
}
