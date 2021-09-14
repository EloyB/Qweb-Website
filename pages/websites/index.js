import React from "react";
import { useRouter } from "next/router";
import { activeLocale } from "../../locale/translation";
import parse from "html-react-parser";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { RiSearchLine } from "react-icons/ri";
import { FaRegHandshake } from "react-icons/fa";
import InfoCard from "../../components/Cards/InfoCard";

export default function websites() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);

  return (
    <div>
      <div className="h-screen max-w-screen-xl m-auto">
        <div className="pt-28 pb-10 px-6 sm:px-20 relative z-20">
          <h1 className="font-extrabold text-4xl text-secondary mb-3 sm:text-4xl md:text-5xl md:leading-tight lg:text-6xl xl:text-7xl">
            {parse(t.websitesPage.heroSection.title)}
          </h1>
          <p className="font-light text-xl text-secondary my-5 sm:my-10 lg:text-2xl xl:text-3xl">
            {t.websitesPage.heroSection.description}
          </p>
        </div>
        <div className="relative px-5 bottom-5 sm:bottom-20 w-full max-w-2xl transform left-1/2 -translate-x-1/2 sm:w-3/4 md:left-auto md:right-0 md:-translate-x-px md:bottom-10 xl:right-40">
          <img
            src="/websites.svg"
            className="w-full"
            alt="Launch your business to the world wide web"
          />
        </div>
      </div>
      <div className="py-16 px-6 space-y-5">
        <div className="space-y-3">
          <h1 className="font-extrabold text-4xl text-secondary sm:text-4xl md:text-5xl md:leading-tight lg:text-6xl xl:text-7xl">
            {parse(t.websitesPage.heroSection.title)}
          </h1>
          <p className="font-light text-xl text-secondary sm:my-10 lg:text-2xl xl:text-3xl">
            {t.websitesPage.heroSection.description}
          </p>
        </div>
        <div className="space-y-5">
          {t.websitesPage.templatesSection.cardSection.map((item, index) => (
            <InfoCard
              index={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="flex justify-end">
          <PrimaryButton
            label="Browse our templates"
            icon={<RiSearchLine className="w-5 h-5 text-white" />}
            onClick={() => router.push("/websites/templates")}
          />
        </div>
      </div>
      <div className="bg-secondary w-full space-y-14 px-6 py-16">
        <div className="space-y-5">
          <div className="space-y-3">
            <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl">
              {parse(t.websitesPage.customSection.title)}
            </h1>
            <p className="text-white font-light text-lg max-w-screen-sm m-auto lg:text-xl">
              {t.websitesPage.customSection.description}
            </p>
          </div>
          <PrimaryButton
            label="Let's sit together"
            icon={<FaRegHandshake className="w-6 h-6 text-white" />}
          />
        </div>
        <div className="space-y-5">
          <div className="space-y-3">
            <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl">
              {parse(t.websitesPage.moreSection.title)}
            </h1>
            <p className="text-white font-light text-lg max-w-screen-sm m-auto lg:text-xl">
              {t.websitesPage.moreSection.description}
            </p>
          </div>
          <div className="space-y-5">
            {t.websitesPage.moreSection.cardSection.map((item, index) => (
              <InfoCard
                dark
                index={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <div className="space-y-3">
            <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl">
              {parse(t.websitesPage.ctoSection.title)}
            </h1>
            <p className="text-white font-light text-lg max-w-screen-sm m-auto lg:text-xl">
              {t.websitesPage.ctoSection.description}
            </p>
          </div>
          <PrimaryButton
            label="Hit us up"
            icon={<FaRegHandshake className="w-6 h-6 text-white" />}
          />
        </div>
      </div>
    </div>
  );
}
