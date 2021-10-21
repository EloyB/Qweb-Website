import React from "react";
import { Disclosure } from "@headlessui/react";
import { HiChevronUp } from "react-icons/hi";

export default function WhyCodeDisclosure() {
  return (
    <div className="w-full">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center justify-between w-full p-4 text-sm font-semibold text-left text-white bg-secondary-light rounded-lg focus:outline-none">
              <span className="md:text-xl">We are developers</span>
              <HiChevronUp
                className={`${
                  open ? "" : "transform rotate-180"
                } w-5 h-5 text-white`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
              We are both developers in heart and soul so why not make use of
              those skills. Put our knowledge into practice and use it to help
              out other businesses.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center justify-between w-full p-4 text-sm font-semibold text-left text-white bg-secondary-light rounded-lg focus:outline-none">
              <span className="md:text-xl">More control</span>
              <HiChevronUp
                className={`${
                  open ? "" : "transform rotate-180"
                } w-5 h-5 text-white`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
              By developing our websites and apps using code we are free to do
              whatever we want and use every available building block
              imagineable.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="mt-2">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex items-center justify-between w-full p-4 text-sm font-semibold text-left text-white bg-secondary-light rounded-lg focus:outline-none">
              <span className="md:text-xl">Endless posibilities</span>
              <HiChevronUp
                className={`${
                  open ? "" : "transform rotate-180"
                } w-5 h-5 text-white`}
              />
            </Disclosure.Button>

            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white">
              Using code we have an endless amount of possibilities. We can
              scale our projects to your needs and don't have to go oversize
              when unnecessary.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
