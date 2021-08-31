import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const [scrollPoint, setScrollPoint] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrollPoint(true);
      } else {
        setScrollPoint(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${
        scrollPoint ? "shadow-md" : "shadow-none"
      } fixed z-50 bg-white py-8 px-6 w-full flex justify-between items-center`}
    >
      <div>
        <Image
          onClick={() => router.push("/")}
          src="/logo.svg"
          layout="fixed"
          width="32"
          height="32"
        />
        <div className="hidden">
          <Link href="/">
            <p>Websites</p>
          </Link>
          <Link href="/">
            <p>Web Apps</p>
          </Link>
          <Link href="/">
            <p>Mobile Apps</p>
          </Link>
          <Link href="/">
            <p>The Team</p>
          </Link>
        </div>
      </div>
      <div className="cursor-pointer" onClick={() => setOpenMenu(true)}>
        <CgMenuRightAlt className="w-8 h-8 text-primary" />
      </div>
      <div
        className={`${
          openMenu ? "absolute" : "hidden"
        } top-5 right-5 left-5 bg-white p-8 shadow-lg rounded-xl`}
      >
        <div className="flex justify-end" onClick={() => setOpenMenu(false)}>
          <IoClose className="w-8 h-8 text-primary" />
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center items-center">
            <IoClose className="w-8 h-8 text-primary" />
            <p>Website</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IoClose className="w-8 h-8 text-primary" />
            <p>Website</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IoClose className="w-8 h-8 text-primary" />
            <p>Website</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IoClose className="w-8 h-8 text-primary" />
            <p>Website</p>
          </div>
        </div>
      </div>
    </div>
  );
}
