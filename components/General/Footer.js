import Image from "next/image";
import React from "react";
import IconButton from "../Buttons/IconButton";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useRouter } from "next/router";
import { activeLocale } from "../../locale/translation";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);
  return (
    <div className="bg-secondary px-6 pt-20 pb-12 space-y-6">
      <div className="space-y-6">
        <Image
          onClick={() => router.push("/")}
          src="/logo.svg"
          layout="fixed"
          width="40"
          height="40"
        />
        <div className="space-y-6 text-lg">
          <div>
            <h1 className="text-white text-opacity-50 font-medium">
              {t.footer.companySection.title}
            </h1>
            {t.footer.companySection.pages.map((item, index) => (
              <Link href={item.link}>
                <p className="text-white font-medium">{item.title}</p>
              </Link>
            ))}
          </div>
          <div>
            <h1 className="text-white text-opacity-50 font-medium">
              {t.footer.servicesSection.title}
            </h1>
            {t.footer.servicesSection.pages.map((item, index) => (
              <Link href={item.link}>
                <p className="text-white font-medium">{item.title}</p>
              </Link>
            ))}
          </div>
          <div>
            <h1 className="text-white text-opacity-50 font-medium">Socials</h1>
            <div className="flex space-x-2">
              <IconButton
                dark
                icon={<FaFacebookSquare className="text-white w-6 h-6" />}
              />
              <IconButton
                dark
                icon={<FaInstagram className="text-white w-6 h-6" />}
              />
              <IconButton
                dark
                icon={<HiOutlineMail className="text-white w-6 h-6" />}
              />
            </div>
          </div>
          <div>
            <h1 className="text-white text-opacity-50 font-medium">
              {t.footer.languages}
            </h1>
            <p
              className={`cursor-pointer font-medium ${
                locale === "nl" ? "text-primary" : "text-white"
              }`}
              onClick={() => toggleLocale("nl", router)}
            >
              NL
            </p>
            <p
              className={`cursor-pointer font-medium ${
                locale === "en-US" ? "text-primary" : "text-white"
              }`}
              onClick={() => toggleLocale("en-US", router)}
            >
              ENG
            </p>
          </div>
        </div>
      </div>
      <div className="h-0.5 rounded-full bg-secondary-light" />
      <p className="text-sm text-white opacity-70"> &#169; Qweb Design 2021</p>
      {/* Copyright */}
    </div>
  );
}
