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
    <div className="rounded-xl shadow-md p-8 flex space-x-5">
      <div>
        <div className="w-12 h-12 rounded-xl bg-primary bg-opacity-30 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="space-y-3">
        <div>
          <h1 className="text-xl font-extrabold text-secondary">{title}</h1>
          <p className="text-sm font-light">{description}</p>
        </div>
        <LinkButton
          text={linkDescription}
          onClick={() => router.push(linkPath)}
        />
      </div>
    </div>
  );
}
