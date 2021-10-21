import { useRouter } from "next/router";
import React from "react";
import { activeLocale } from "../../locale/translation";
import parse from "html-react-parser";
import FeaturesCard from "../../components/Cards/FeaturesCard";

export default function index() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);

  return (
    <div>
      <div className="max-w-screen-xl sm:h-screen sm:flex sm:flex-col sm:justify-between m-auto">
        <div className="pt-28 pb-10 px-6 sm:px-20 relative z-20">
          <h1 className="font-extrabold text-4xl text-secondary mb-3 sm:text-4xl md:text-5xl md:leading-tight lg:text-6xl xl:text-7xl">
            {parse(t.webappsPage.heroSection.title)}
          </h1>
          <p className="font-light text-xl text-secondary my-5 sm:my-10 lg:text-2xl xl:text-3xl">
            {t.webappsPage.heroSection.description}
          </p>
        </div>
        <div className="relative px-5 bottom-5 sm:bottom-20 w-full max-w-2xl transform left-1/2 -translate-x-1/2 sm:w-3/4 md:left-auto md:right-0 md:-translate-x-px md:bottom-10 xl:right-40">
          <img
            src="/websites.svg"
            className="w-full sm:w-5/6"
            alt="Launch your business to the world wide web"
          />
        </div>
      </div>
      <div className="py-16 px-6 sm:px-20 space-y-5">
        <div className="space-y-3">
          <h1 className="font-extrabold text-4xl text-secondary sm:text-4xl md:text-5xl md:leading-tight lg:text-6xl xl:text-7xl">
            {parse(t.webappsPage.differenceSection.title)}
          </h1>
          <p className="font-light text-xl text-secondary sm:my-10 lg:text-2xl xl:text-3xl">
            {t.webappsPage.differenceSection.description}
          </p>
        </div>
        <div>
          {t.webappsPage.differenceSection.cards.map((item, index) => (
            <FeaturesCard title={item.title} features={item.features} />
          ))}
        </div>
      </div>
    </div>
  );
}
