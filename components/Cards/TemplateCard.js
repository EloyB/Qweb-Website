import Image from "next/image";
import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function TemplateCard() {
  return (
    <div className="shadow-md rounded-xl relative w-full max-w-screen-xs h-96 flex items-end">
      <Image
        className="rounded-xl"
        src="/placeholder.jpg"
        layout="fill"
        objectFit="cover"
      />
      <div className="relative p-5 bg-white w-full rounded-b-xl space-y-3">
        <p className="text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
          rerum perferendis ipsa reiciendis
        </p>
        <PrimaryButton label="Visit this template" />
      </div>
    </div>
  );
}
