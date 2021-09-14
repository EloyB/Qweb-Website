import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";
import NavigationDisclosure from "./NavigationDisclosure";

export default function Navbar() {
  const router = useRouter();

  const [scrollPoint, setScrollPoint] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30 || openMenu) {
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
      } fixed z-50 bg-white w-full py-6 px-6 `}
    >
      <div className="w-full flex justify-between items-center">
        <div>
          <Image
            onClick={() => router.push("/")}
            src="/logo.svg"
            layout="fixed"
            width="40"
            height="40"
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
        <div className="cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
          <CgMenuRightAlt className="w-8 h-8 text-primary" />
        </div>
      </div>
      <div className={openMenu ? "block" : "hidden"}>
        <NavigationDisclosure onClick={() => setOpenMenu(false)} />
      </div>
    </div>
  );
}
