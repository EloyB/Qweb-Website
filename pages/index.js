import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainSection from "../components/mainsection";
import SubSection from "../components/subsection";
import Contactform from "../components/contactform";
import { useRouter } from "next/router";
import DefaultSeo from "../components/defaultSeo";
import { activeLocale, toggleLocale } from "../locale/translation";
import parse from "html-react-parser";
import Image from "next/image";

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
        <div className="pt-10 pb-10 px-10 sm:px-20 relative z-20">
          <div className="pb-6 sm:py-6">
            <Image src="/logo-blue.svg" layout="intrinsic" width="75" height="75" />
          </div>
          <h1 className="font-extrabold text-3xl text-secondary mb-3 sm:text-4xl md:text-5xl md:leading-tight lg:text-6xl xl:text-7xl">
            {parse(t.heroSection.title)}
          </h1>
          <p className="font-light text-lg text-secondary my-5 sm:my-10 lg:text-2xl xl:text-3xl">
            {t.heroSection.subtitle}
          </p>
          <div
            className="bg-primary hover:bg-primary-dark text-white cursor-pointer w-44 py-3 px-6 rounded-md flex items-center justify-between lg:w-60 lg:text-xl"
            onClick={() => router.push("#launch")}
          >
            <p>{t.heroSection.buttonText}</p> <RocketIcon />
          </div>
        </div>
        <div className="absolute px-5 bottom-5 sm:bottom-20 w-full max-w-2xl transform left-1/2 -translate-x-1/2 sm:w-3/4 md:left-auto md:right-0 md:-translate-x-px md:bottom-10 xl:right-40">
          <img src="/top-illustration-blue.svg" alt="Launch your business to the world wide web" />
        </div>
      </div>
      <div id="launch" className="bg-secondary w-full pt-24 pb-24">
        <div className="px-10 text-center relative sm:px-20">
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl">
            {parse(t.bannerSection.title)}
          </h1>
          <p className="text-white font-light text-base mt-4 pb-24 max-w-screen-sm m-auto lg:text-xl">
            {t.bannerSection.subtitle}
          </p>
          <div className="absolute w-2/3 max-w-xs md:-bottom-52 transform left-1/2 -translate-x-1/2 -bottom-40 sm:w-2/5 sm:-bottom-36">
            <img
              src="/middle-illustration-blue.svg"
              alt="Launch your business to the world wide web"
            />
            {/* <MiddleIllustration /> */}
          </div>
        </div>
      </div>
      <div className="py-36 px-10 max-w-screen-xl m-auto sm:px-20">
        <MainSection
          title={t.infoSection.title1}
          description={t.infoSection.subtitle1}
          icon={
            <svg
              className="w-6 h-6 text-primary lg:w-10 lg:h-10"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
            </svg>
          }
        />
        <MainSection
          reverse
          title={t.infoSection.title2}
          description={t.infoSection.subtitle2}
          icon={
            <svg
              className="w-6 h-6 text-primary lg:w-10 lg:h-10"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          }
        />
        <MainSection
          title={t.infoSection.title3}
          description={t.infoSection.subtitle3}
          icon={
            <svg
              className="w-6 h-6 text-primary lg:w-10 lg:h-10"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                clipRule="evenodd"
              ></path>
            </svg>
          }
        />
      </div>
      <div className="bg-secondary pt-24">
        <div className="max-w-screen-xl m-auto px-10">
          <h1 className="text-white font-extrabold text-center text-4xl sm:text-5xl lg:text-6xl">
            But wait... There is <span className="text-primary">more!</span>
          </h1>
          <p className="text-white font-light text-base text-center mt-4 pb-24 max-w-screen-sm m-auto lg:text-xl">
            Because you know. The more, the better
          </p>
          <div>
            <div className="space-y-20 flex flex-col lg:flex-row lg:space-y-0 lg:space-x-20">
              <SubSection
                title={t.moreSection.seo.title}
                description={t.moreSection.seo.description}
                icon={
                  <svg
                    className="w-6 h-6 text-white lg:w-10 lg:h-10"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"></path>
                    <path
                      fillRule="evenodd"
                      d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                }
              />
              <SubSection
                title={t.moreSection.analytics.title}
                description={t.moreSection.analytics.description}
                icon={
                  <svg
                    className="w-6 h-6 text-white lg:w-10 lg:h-10"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                  </svg>
                }
              />
              <SubSection
                title={t.moreSection.hosting.title}
                description={t.moreSection.hosting.description}
                icon={
                  <svg
                    className="w-6 h-6 text-white lg:w-10 lg:h-10"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"></path>
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"></path>
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"></path>
                  </svg>
                }
              />
            </div>
          </div>
        </div>
        <div className="pt-40 pb-10 px-8 md:flex lg:max-w-screen-xl lg:m-auto">
          <div className="w-full space-y-5 md:pr-8">
            <h1 className="font-extrabold text-4xl text-white text-center md:text-left sm:text-4xl md:text-5xl md:leading-tight md:pt-5 lg:text-6xl xl:text-7xl">
              {parse(t.contactSection.title)}
            </h1>
            <p className="text-white text-center font-light md:text-left">
              {t.contactSection.description}
            </p>
            <div className="flex space-x-5 items-center justify-center md:justify-start">
              <a href="https://www.instagram.com/qwebdesign_be/">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="text-white opacity-70 w-5 h-5 md:w-7 md:h-7 hover:text-primary hover:opacity-100"
                >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/qwebdesignBE">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white opacity-70 w-5 h-5 md:w-7 md:h-7 hover:text-primary hover:opacity-100"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-10 sm:px-16 md:px-0 md:mt-0 md:w-full">
            <Contactform />
          </div>
        </div>
        <div className="mx-8 md:px-8 space-y-5 flex-col md:flex-row lg:max-w-screen-xl lg:m-auto border-t-2 border-secondary-light py-10 flex items-center justify-between">
          <div>
            <p className="text-sm text-white opacity-70"> &#169; Qweb Design 2021</p>
          </div>
          <div className="flex divide-x-2 space-x-2 ">
            <p
              className={`cursor-pointer ${
                locale === "nl" ? "text-primary" : "text-white opacity-70"
              }`}
              onClick={() => toggleLocale("nl", router)}
            >
              NL
            </p>
            <p
              className={`cursor-pointer pl-2 ${
                locale === "en-US" ? "text-primary" : "text-white opacity-70"
              }`}
              onClick={() => toggleLocale("en-US", router)}
            >
              ENG
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const RocketIcon = () => {
  return (
    <svg
      className="w-6 h-6"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.7405 1.3335c-2.86 0-6.6947 1.96133-9.2707 5.33333h-2.136c-1.54266 0-2.42666 1.152-3.036 2.36933l-.81733 1.63064H5.3338l2 2 2 2v3.852l1.6307-.816c1.2173-.608 2.3693-1.4933 2.3693-3.036v-2.136c3.372-2.57597 5.3333-6.41197 5.3333-9.27064V1.3335h-1.9266zm-3.4067 4c.3536 0 .6928.14047.9428.39052.2501.25005.3905.58919.3905.94281 0 .35362-.1404.69276-.3905.94281-.25.25005-.5892.39052-.9428.39052s-.6928-.14047-.9428-.39052c-.2501-.25005-.3905-.58919-.3905-.94281 0-.35362.1404-.69276.3905-.94281.25-.25005.5892-.39052.9428-.39052zm-8.66666 8l-.66667.6667c-.96267.9626-1.33333 3.3333-1.33333 3.3333s2.264-.264 3.33333-1.3333l.66667-.6667-2-2z"
        fill="#fff"
      />
    </svg>
  );
};
