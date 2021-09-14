import { Disclosure } from "@headlessui/react";
import React from "react";
import { HiChevronUp } from "react-icons/hi";
import Link from "next/link";
import { CgBrowser } from "react-icons/cg";
import { RiDashboardLine, RiTeamLine } from "react-icons/ri";
import { GoDeviceMobile } from "react-icons/go";
import { HiOutlinePuzzle } from "react-icons/hi";
import { FaRegHandshake } from "react-icons/fa";

export default function NavigationDisclosure({ onClick }) {
  return (
    <div className="w-full pt-4">
      <Disclosure>
        {({ open }) => (
          <>
            <div className="flex items-center justify-between w-full py-2 text-base font-medium text-left text-secondary focus:outline-none">
              <Link href="/websites">
                <a onClick={onClick} className="flex items-center space-x-3">
                  <div className="bg-primary bg-opacity-30 rounded-xl w-10 h-10 flex items-center justify-center">
                    <CgBrowser className="w-5 h-5 text-white" />
                  </div>
                  <span>Websites</span>
                </a>
              </Link>
              <Disclosure.Button>
                <HiChevronUp
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-7 h-7 text-primary`}
                />
              </Disclosure.Button>
            </div>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-secondary-light">
              <Link href="/websites/templates">
                <a onClick={onClick} className="flex items-center space-x-3">
                  <div className="bg-primary bg-opacity-30 rounded-xl w-10 h-10 flex items-center justify-center">
                    <HiOutlinePuzzle className="w-5 h-5 text-white" />
                  </div>
                  <span>Templates</span>
                </a>
              </Link>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Link href="/webapps" className="mt-2">
        <a
          onClick={onClick}
          className="flex items-center py-2 mt-2 justify-between font-medium"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-primary bg-opacity-30 rounded-xl w-10 h-10 flex items-center justify-center">
              <RiDashboardLine className="w-5 h-5 text-white" />
            </div>
            <span>Web Apps</span>
          </div>
        </a>
      </Link>
      <Link href="/" className="mt-2">
        <a
          onClick={onClick}
          className="flex items-center py-2 mt-2 justify-between font-medium"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-primary bg-opacity-30 rounded-xl w-10 h-10 flex items-center justify-center">
              <GoDeviceMobile className="w-5 h-5 text-white" />
            </div>
            <span>Mobile Apps</span>
          </div>
        </a>
      </Link>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center justify-between w-full py-2 text-base font-medium text-left text-secondary focus:outline-none">
              <div className="flex items-center space-x-3">
                <div className="bg-primary bg-opacity-30 rounded-xl w-10 h-10 flex items-center justify-center">
                  <RiTeamLine className="w-5 h-5 text-white" />
                </div>
                <span>The Company</span>
              </div>
              <HiChevronUp
                className={`${
                  open ? "transform rotate-180" : ""
                } w-7 h-7 text-primary`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-secondary-light">
              <div>
                <Link href="/team">
                  <a onClick={onClick} className="flex items-center space-x-3">
                    <div className="bg-primary bg-opacity-30 rounded-xl w-10 h-10 flex items-center justify-center">
                      <FaRegHandshake className="w-5 h-5 text-white" />
                    </div>
                    <span>The Team</span>
                  </a>
                </Link>
                <Link href="/contact">
                  <a
                    onClick={onClick}
                    className="flex items-center space-x-3 mt-4"
                  >
                    <div className="bg-primary bg-opacity-30 rounded-xl w-10 h-10 flex items-center justify-center">
                      <HiChevronUp className="w-5 h-5 text-white" />
                    </div>
                    <span>Contact</span>
                  </a>
                </Link>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
