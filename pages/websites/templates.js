import { useRouter } from "next/router";
import React from "react";
import { activeLocale } from "../../locale/translation";
import parse from "html-react-parser";
import TemplateCard from "../../components/Cards/TemplateCard";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

export default function templates() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);

  return (
    <div>
      <div className="max-w-screen-xl sm:h-screen sm:flex sm:flex-col sm:justify-between m-auto">
        <div className="pt-28 pb-10 px-6 sm:px-20 relative z-20">
          <h1 className="font-extrabold text-4xl text-secondary mb-3 sm:text-4xl md:text-5xl md:leading-tight lg:text-6xl xl:text-7xl">
            {parse(t.templatesPage.heroSection.title)}
          </h1>
          <p className="font-light text-xl text-secondary my-5 sm:my-10 lg:text-2xl xl:text-3xl">
            {t.templatesPage.heroSection.description}
          </p>
        </div>
        <div className="relative px-5 bottom-5 sm:bottom-20 w-full max-w-2xl transform left-1/2 -translate-x-1/2 sm:w-3/4 md:left-auto md:right-0 md:-translate-x-px md:bottom-10 xl:right-40">
          <img
            src="/templates.svg"
            className="w-full"
            alt="Launch your business to the world wide web"
          />
        </div>
      </div>
      <div className="px-6 sm:px-20 py-16 space-y-5">
        <div className="space-y-3">
          <h1 className="font-extrabold text-4xl text-secondary mb-3 sm:text-4xl md:text-5xl md:leading-tight lg:text-6xl xl:text-7xl">
            {parse(t.templatesPage.templatesSection.title)}
          </h1>
          <p className="font-light text-xl text-secondary my-5 sm:my-10 lg:text-2xl xl:text-3xl">
            {t.templatesPage.templatesSection.description}
          </p>
        </div>
        <div className="space-y-5">
          <TemplateCard />
        </div>
      </div>
      <div className="bg-secondary w-full space-y-14 px-6 sm:px-20 py-16">
        <div className="space-y-5">
          <div className="space-y-3">
            <h1 className="font-extrabold text-4xl text-white mb-3 sm:text-4xl md:text-5xl md:leading-tight lg:text-6xl xl:text-7xl">
              {parse(t.templatesPage.ctoSection.title)}
            </h1>
            <p className="font-light text-xl text-white my-5 sm:my-10 lg:text-2xl xl:text-3xl">
              {t.templatesPage.ctoSection.description}
            </p>
          </div>
          <PrimaryButton label="Hit us up!" />
        </div>
      </div>
    </div>
  );
}
