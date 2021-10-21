import Image from "next/image";
import React, { useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function TemplateCard() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="p-6 rounded-xl space-y-3 text-secondary shadow-md">
      <div className="relative w-full h-52 rounded-xl bg-gray-50">
        <Image
          className="rounded-xl"
          src="/placeholder.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="space-y-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quia
          aspernatur, architecto repudiandae culpa tempore inventore?
        </p>
        <PrimaryButton label="Visit this template" />
      </div>
    </div>
  );
}
