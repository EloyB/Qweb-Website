import Image from "next/image";
import React, { useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function TemplateCard() {
  const [openModal, setOpenModal] = useState(false);

  const onOpenModal = () => {
    console.log(openModal);
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
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
    </>
  );
}
