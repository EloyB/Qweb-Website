import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import DefaultSeo from "../components/General/defaultSeo";
import { activeLocale, toggleLocale } from "../locale/translation";
import parse from "html-react-parser";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { BiRocket } from "react-icons/bi";
import LinkCard from "../components/Cards/LinkCard";
import TeamMemberCard from "../components/Cards/TeamMemberCard";
import WhyCodeDisclosure from "../components/Others/WhyCodeDisclosure";

const defaultSeo = {
  title: "Qweb Design | Launch to the world wide web",
  description:
    "A Belgian based company with an expertise in web design. Designing and developing your websites.",
  ogTitle: "Qweb Design | Launch to the world wide web",
  ogDescription:
    "A Belgian based company with an expertise in web design. Designing and developing your websites.",
  ogUrl: "https://www.qwebdesign.be/",
  ogImage: "https://www.qwebdesign.be/banner-blue.png",
  ogType: "website",
  twitterTitle: "Qweb Design | Launch to the world wide web",
  twitterDescription:
    "A Belgian based company with an expertise in web design. Designing and developing your websites.",
  twitterUrl: "https://www.qwebdesign.be/",
  twitterImage: "https://www.qwebdesign.be/banner-blue.png",
};

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = activeLocale(locale);

  return (
    <div>
      <Head>
        <title>Qweb Design | Launch to the world wide web</title>
      </Head>
      <DefaultSeo {...defaultSeo} />
      <div className="h-screen max-w-screen-xl m-auto">
        <div className="pt-28 pb-10 px-6 sm:px-20 relative z-20">
          <h1 className="font-extrabold text-4xl text-secondary mb-3 sm:text-4xl md:text-5xl md:leading-tight lg:text-6xl xl:text-7xl">
            {parse(t.homePage.heroSection.title)}
          </h1>
          <p className="font-light text-xl text-secondary my-5 sm:my-10 lg:text-2xl xl:text-3xl">
            {t.homePage.heroSection.subtitle}
          </p>
          <PrimaryButton
            onClick={() => router.push("#launch")}
            label="Launch!"
            icon={<BiRocket className="text-white w-4 h-4" />}
          />
        </div>
        <div className="absolute px-5 bottom-5 sm:bottom-20 w-full max-w-2xl transform left-1/2 -translate-x-1/2 sm:w-3/4 md:left-auto md:right-0 md:-translate-x-px md:bottom-10 xl:right-40">
          <img
            src="/top-illustration-blue.svg"
            alt="Launch your business to the world wide web"
          />
        </div>
      </div>
      <div id="launch" className="bg-secondary w-full space-y-7 px-6 py-16">
        <div className="space-y-3">
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl">
            {parse(t.homePage.bannerSection.title)}
          </h1>
          <p className="text-white font-light text-lg max-w-screen-sm m-auto lg:text-xl">
            {t.homePage.bannerSection.subtitle}
          </p>
        </div>
        <PrimaryButton
          onClick={() => router.push("/")}
          label="Get to know the team!"
          icon={<BiRocket className="text-white w-4 h-4" />}
        />
      </div>
      <div className="py-12 px-6 max-w-screen-xl m-auto space-y-5 sm:px-20">
        <h1 className="text-secondary font-extrabold text-4xl sm:text-5xl lg:text-6xl">
          {parse(t.homePage.serviceSection.title)}
        </h1>
        <div className="space-y-5">
          {t.homePage.serviceSection.cardsSection.map((item, index) => (
            <LinkCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              linkDescription="Meer info"
              linkPath={item.link}
            />
          ))}
        </div>
      </div>
      <div className="bg-secondary pt-12 space-y-14">
        <div className="max-w-screen-xl m-auto px-6 space-y-6">
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl">
            {parse(t.homePage.whyCodeSection.title)}
          </h1>
          <div>
            <WhyCodeDisclosure />
          </div>
        </div>
        <div className="px-6 space-y-5">
          <div className="space-y-2">
            <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl">
              {parse(t.homePage.ctoSection.title)}
            </h1>
            <p className="text-white font-light text-lg max-w-screen-sm m-auto lg:text-xl">
              {t.homePage.ctoSection.description}
            </p>
          </div>
          <PrimaryButton
            onClick={() => router.push("/")}
            label="Hit us up!"
            icon={<BiRocket className="text-white w-4 h-4" />}
          />
        </div>
      </div>
    </div>
  );
}
