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
  ogImage: "https://www.qwebdesign.be/banner.png",
  ogType: "website",
  twitterTitle: "Qweb Design | Launch to the world wide web",
  twitterDescription:
    "A Belgian based company with an expertise in web design. Designing and developing your websites.",
  twitterUrl: "https://www.qwebdesign.be/",
  twitterImage: "https://www.qwebdesign.be/banner.png",
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
            <div className="flex space-x-5 items-center">
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

const MiddleIllustration = () => {
  return (
    <svg
      className="w-full h-auto"
      viewBox="0 0 264 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          opacity=".18"
          d="M65.9699 21.734c-8.1258 10.0599-13.1862 22.5675-20.1894 33.5561-5.1812 8.2111-11.5023 15.5629-16.7698 23.7393-10.5006 16.2833-16.8389 36.1336-15.6818 55.9676 1.1571 19.833 10.3624 39.415 25.7074 50.273 9.4211 6.675 20.5694 9.843 31.6571 11.9 37.3306 6.944 77.5106 1.597 109.4096-20.545 5.475-3.802 10.717-8.09 16.658-10.971 15.258-7.413 35.05-5.694 46.112-19.304 6.658-8.194 8.126-19.912 7.902-30.839-.268-13.124-2.824-26.9078-10.777-36.7507-10.363-12.9069-27.288-16.3614-41.294-24.3035-13.653-7.6989-24.663-19.8073-36.39-30.6223-28.211-26.03072-68.7974-36.2034-96.3441-2.1005z"
          fill="#61C79F"
        />
        <path
          d="M201.32 129.459c.001.803-.161 1.598-.478 2.336-.316.738-.78 1.402-1.362 1.952-.997.952-2.283 1.539-3.653 1.667-.255.021-.512.021-.768 0l-42.892-.868c-1.644-.018-3.217-.68-4.383-1.846s-1.833-2.742-1.86-4.395c-.003-.803.157-1.598.47-2.337.313-.739.773-1.406 1.352-1.96 1.191-1.138 2.778-1.761 4.421-1.736h1.46c-.302-1.064-.456-2.165-.458-3.272-.002-1.582.316-3.148.937-4.601.621-1.454 1.53-2.765 2.672-3.853 1.009-.969 2.178-1.753 3.455-2.318 1.654-.724 3.445-1.08 5.25-1.041l3.644.078c2.267.047 4.48.704 6.408 1.904 1.927 1.2 3.499 2.899 4.55 4.918 1.051-.502 2.205-.749 3.368-.72h.941c1.952.02 3.82.805 5.205 2.188 1.385 1.382 2.179 3.254 2.213 5.216v.356c-.001.676-.1 1.348-.294 1.996l3.55.069c1.648.023 3.223.69 4.39 1.86 1.167 1.17 1.835 2.751 1.862 4.407z"
          fill="#fff"
        />
        <path
          d="M195.827 135.414c-.255.021-.512.021-.768 0l-42.892-.868c-1.644-.018-3.217-.68-4.383-1.846s-1.833-2.742-1.86-4.395c-.003-.803.157-1.599.47-2.337.313-.739.773-1.406 1.352-1.96-1.727 10.65 9.369 9.123 9.369 9.123h27.866l10.846 2.283z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M156.77 123.557l-3.117-1.189c-.302-1.064-.456-2.165-.458-3.272-.002-1.582.317-3.148.937-4.601.621-1.454 1.531-2.765 2.673-3.853 1.008-.969 2.177-1.754 3.454-2.318-8.627 7.43-3.489 15.233-3.489 15.233z"
          fill="url(#paint1_linear)"
        />
        <path
          opacity=".23"
          d="M104.734 190.061c30.303 0 54.869-22.302 54.869-49.813 0-27.511-24.566-49.8134-54.869-49.8134-30.3031 0-54.8688 22.3024-54.8688 49.8134 0 27.511 24.5657 49.813 54.8688 49.813z"
          fill="#61C79F"
        />
        <path
          d="M172.859 131.994c.015 11.564-3.73 22.817-10.664 32.046l-.113.156c-7.598 10.066-18.509 17.089-30.784 19.815-12.274 2.727-25.114.978-36.2242-4.933-11.1106-5.91-19.7691-15.599-24.429-27.334-4.66-11.735-5.0179-24.753-1.0099-36.73 4.008-11.976 12.1209-22.1297 22.8897-28.6482 10.7684-6.5186 23.4924-8.9771 35.8984-6.9365 12.406 2.0407 23.686 8.4475 31.826 18.0763 8.14 9.6284 12.609 21.8524 12.61 34.4884z"
          fill="#61C79F"
        />
        <path
          d="M102.809 105.789c-2.9103 1.207-6.1226 1.493-9.1105 2.483-2.9878.989-5.9843 2.986-6.7528 6.076-.3972 1.553-.19 3.281-.9499 4.687-1.0103 1.892-3.3764 2.604-4.8099 4.166-2.7287 3.021-.9326 8.202 2.4007 10.537 3.3332 2.335 7.5904 2.691 11.5799 3.377 1.0918.087 2.1324.501 2.9879 1.189 2.3226 2.231-.2505 6.267.734 9.339.5526 1.736 2.1846 2.925 2.9276 4.592 1.425 3.177-.734 6.683-2.1591 9.86-2.57 5.796-2.8021 12.368-.6476 18.332-.0993.144-.209.28-.3282.408-5.6829-2.507-10.8874-5.99-15.3795-10.294-4.3781-6.172-7.8409-12.899-7.4782-20.294.1986-4.01 1.5284-7.881 1.7789-11.874.4145-6.484-1.9171-13.523 1.2435-19.182 1.727-3.134 5.0948-6.571 3.2123-9.609-3.3246.486-6.9083.565-9.9565-.599 3.7405-7.832 9.3293-14.6264 16.2797-19.7912 6.9504-5.1648 15.0517-8.5433 23.5987-9.8412 3.281 9.4263.673 22.2724-9.171 26.4384z"
          fill="url(#paint2_linear)"
        />
        <path
          d="M172.858 131.994c.003 3.37-.312 6.732-.941 10.042-1.408 1.151-2.728 2.408-3.947 3.759-4.188 4.93-5.095 11.77-5.777 18.227 0 .139 0 .278-.043.408 0-.087 0-.165-.069-.251-.333-1.659-1.052-3.214-2.099-4.54-1.191-1.293-3.307-1.936-4.758-.92-.69-1.736-1.384-3.457-2.081-5.165-4.317 0-8.773 0-12.832-1.536-4.058-1.536-7.418-4.479-10.664-7.352.426-4.978.333-9.987-.277-14.946 12.613-1.376 24.279-7.374 32.771-16.848-7.594-.38-15.124 1.572-21.588 5.599-1.382.868-2.781 1.84-4.395 1.979-1.024.025-2.044-.115-3.023-.417l-10.44-2.665c-1.304-6.753 3.351-13.531 9.335-16.873 4.49-2.5 9.939-2.0139 14.248-4.2012 2.954-1.4929 3.817-4.1055 6.399-6.0238h.052c6.272 4.9752 11.341 11.314 14.828 18.54 3.486 7.227 5.298 15.153 5.301 23.184z"
          fill="url(#paint3_linear)"
        />
        <path
          d="M136.262 121.205c-.311 1.024-.605 2.222 0 3.081.297.367.688.647 1.131.807.516.248 1.09.347 1.658.287.568-.059 1.109-.276 1.563-.625.474-.522.81-1.154.976-1.84.807-2.491 1.385-5.051 1.727-7.647.065-.239.065-.491 0-.729-.135-.251-.351-.447-.613-.556-1.373-.738-3.523-1.328-4.318.304-.976 2.1-1.433 4.696-2.124 6.918z"
          fill="#FBC4D6"
        />
        <path
          d="M140.414 122.394c.29-.04.585-.014.864.078.189.105.354.25.483.425l2.979 3.359c.579.651 1.184 1.545.778 2.318-.143.215-.332.395-.553.527-.222.132-.469.213-.725.237-1.443.132-2.894-.154-4.18-.825-.915-.399-1.822-.868-2.711-1.302-.661-.302-1.239-.76-1.684-1.337-.682-1.041-.864-3.541.328-4.34.613-.39 1.148-.112 1.727.157.827.453 1.752.694 2.694.703z"
          fill="#61C79F"
        />
        <path
          d="M152.772 132.645c.023.193.003.389-.06.572-.103.179-.252.326-.432.426-.566.392-1.23.617-1.917.651-.343.013-.685-.054-.998-.196-.313-.141-.589-.354-.807-.62-.318-.505-.51-1.08-.561-1.675-.253-1.281-.378-2.584-.372-3.889-.015-.077-.013-.156.005-.232.019-.076.054-.147.102-.208.048-.061.11-.111.179-.146.07-.035.146-.054.224-.056 1.071-.226 3.204-.79 3.748.529.554 1.556.854 3.191.889 4.844z"
          fill="#FBC4D6"
        />
        <path
          d="M157.307 132.514c.92.05 1.829.225 2.703.521.434.151.832.39 1.171.702.339.312.61.691.797 1.112.175.413.196.875.061 1.302-.298.634-.822 1.133-1.468 1.398-3.069 1.639-6.532 2.387-10 2.161-.89.036-1.759-.275-2.426-.868-.482-.717-.707-1.577-.639-2.439l-.121-4.08c.781.035 1.544.252 2.228.634 1.278.434 1.779-.608 2.832-.868 1.373-.321 3.463.286 4.862.425z"
          fill="#61C79F"
        />
        <path
          d="M140.414 122.394c.29-.04.585-.014.864.078.189.105.354.25.483.425l2.979 3.359c.579.651 1.184 1.545.778 2.318-.143.215-.332.395-.553.527-.222.132-.469.213-.725.237-1.443.132-2.894-.154-4.18-.825-.915-.399-1.822-.868-2.711-1.302-.661-.302-1.239-.76-1.684-1.337-.682-1.041-.864-3.541.328-4.34.613-.39 1.148-.112 1.727.157.827.453 1.752.694 2.694.703z"
          fill="url(#paint4_linear)"
        />
        <path
          d="M157.307 132.514c.92.05 1.829.225 2.703.521.434.151.832.39 1.171.702.339.312.61.691.797 1.112.175.413.196.875.061 1.302-.298.634-.822 1.133-1.468 1.398-3.069 1.639-6.532 2.387-10 2.161-.89.036-1.759-.275-2.426-.868-.482-.717-.707-1.577-.639-2.439l-.121-4.08c.781.035 1.544.252 2.228.634 1.278.434 1.779-.608 2.832-.868 1.373-.321 3.463.286 4.862.425z"
          fill="url(#paint5_linear)"
        />
        <path
          d="M108.111 88.317c-1.858-.1621-3.727-.133-5.579.0868-.242.0124-.477.0871-.682.217-.118.1117-.212.2461-.278.3952-.065.1491-.1.3099-.102.4728-.259 2.5171 1.727 4.7044 3.869 6.0324 5.794 3.6108 13.1 3.472 19.498 5.8328.611.163 1.153.519 1.546 1.016.267.538.397 1.134.38 1.736.285 3.393 2.159 6.449 2.781 9.79.621 3.342-.044 6.84.466 10.208 2.098-2.248 5.673-2.604 7.772-4.826 1.969-2.049 2.357-5.104 2.651-7.933l.794-7.76c.147-.56.087-1.154-.171-1.672-.257-.518-.694-.923-1.228-1.14-9.447-6.1371-20.517-11.4839-31.717-12.456z"
          fill="url(#paint6_linear)"
        />
        <path
          d="M146.314 87.5356c.872.176 1.681.587 2.34 1.1891.675.9451.982 2.1062.863 3.2636-.02 8.2357-1.569 16.3957-4.568 24.0607-.028.269-.121.528-.272.752-.15.225-.353.409-.591.537-.238.127-.503.194-.773.195-.269.001-.535-.065-.773-.191-1.796-.487-3.565-1.067-5.302-1.736l2.349-15.6236c.112-.4335.088-.8914-.069-1.3106-.174-.2973-.417-.5476-.708-.7291-2.68-1.9588-5.509-3.7003-8.463-5.2079-2.358-1.1978-5.06-2.6039-5.699-5.1384-.133-.4331-.16-.8919-.079-1.3376.081-.4457.268-.8652.545-1.223.373-.3688.813-.6633 1.295-.868 1.563-.7725 3.532-1.7359 5.328-1.5797 1.442.1476 1.995.9808 3.195 1.5971 3.333 1.6665 7.763 2.2915 11.382 3.3504z"
          fill="#282328"
        />
        <path
          d="M130.27 62.6853c1.157 3.2029 1.727 6.5967 2.746 9.8342.223.8582.623 1.6596 1.174 2.3522.733.7063 1.62 1.2296 2.591 1.5277 1.353.5266 2.728.9866 4.127 1.3801.933.2517 2.047.6857 2.151 1.6405.022.3184-.044.6367-.19.92-.361.6466-.881 1.1896-1.51 1.5771-.629.3874-1.346.6065-2.083.6363-1.471.0396-2.936-.2019-4.317-.7118-1.258-.2559-2.412-.8812-3.316-1.7967-.514-.7614-.875-1.6165-1.062-2.5171-1.418-5.0564-3.384-9.9407-5.864-14.5647-.742-1.2212-1.322-2.5342-1.727-3.9059-.57-2.3957-.579-8.0723 1.883-5.9891 1.986 1.6839 4.524 7.2389 5.397 9.6172z"
          fill="#FBC4D6"
        />
        <path
          d="M120.846 87.232c1.456-.5671 2.873-1.2311 4.24-1.9877 5.182-2.8817.942-4.2965-.785-7.7598-1.235-2.4563-.734-5.3988-.095-8.0635 1.131-4.6871 2.642-9.5478 1.554-14.2262-.136-.7593-.43-1.481-.864-2.1179-.316-.395-.682-.748-1.088-1.0502-1.093-.9497-2.352-1.6883-3.713-2.1787-2.59-.8679-5.526-.2343-7.987 1.0069-9.672 4.878-11.736 17.1947-11.347 27.0463.103 2.7341.526 5.6245 2.279 7.7163s4.232 2.8904 6.771 3.2029c3.752.3855 7.541-.1599 11.035-1.5884z"
          fill="#fff"
        />
        <path
          d="M106.427 81.6597c.078.9246.374 1.8172.863 2.6039.864 1.2239 2.453 1.6752 3.912 2.0311l6.571 1.6318c.801.244 1.633.3698 2.47.3732 1.796-.0868 3.342-1.2412 4.767-2.3522.364-.2504.68-.5651.932-.9287-3.626-.3472-7.245-.7118-10.854-1.2412-2.124-.3125-4.37-.7465-5.933-2.2134-.807-.8018-1.421-1.7786-1.796-2.8557-.259-.6683-.38-2.3695-1.131-2.5171-.189 1.8231-.122 3.6639.199 5.4683z"
          fill="url(#paint7_linear)"
        />
        <path
          d="M119.397 57.4775c0 .2736-.109.5359-.302.7291-.179.1062-.389.149-.596.1215-.676-.0319-1.338-.2092-1.941-.5199-.603-.3108-1.133-.7478-1.553-1.2816-.421-.5338-.723-1.152-.886-1.813-.162-.6609-.182-1.3493-.058-2.0187.155-.868.527-1.6144.76-2.4303.457-1.6319.38-3.472 1.407-4.8173.89 2.046 1.905 4.0347 3.04 5.9543.29.3817.492.8237.59 1.2937.099.47.092.9561-.02 1.4231l-.441 3.3591z"
          fill="#FBC4D6"
        />
        <path
          d="M119.907 53.2767l-.389 2.604s-4.447-2.2134-3.868-6.3189c.578-4.1056 4.257 3.7149 4.257 3.7149z"
          fill="url(#paint8_linear)"
        />
        <path
          d="M125.105 50.7423c-.228.8342-.712 1.5751-1.382 2.1179-.319.2178-.677.3738-1.053.46-1.323.2579-2.692.0886-3.913-.4836-1.221-.5722-2.23-1.5179-2.883-2.7019-.616-1.1993-.967-2.518-1.03-3.8661-.062-1.3481.165-2.694.667-3.9457.411-1.3728 1.341-2.529 2.591-3.2202.683-.2708 1.422-.3673 2.151-.281.73.0863 1.426.3528 2.028.7757 1.636 1.148 2.9 2.7537 3.636 4.6177.63 1.9009-.164 4.7131-.812 6.5272z"
          fill="#FBC4D6"
        />
        <path
          d="M144.629 98.4462c1.107 1.4166 1.981 3.0018 2.591 4.6958 3.396 8.232 5.603 16.91 6.554 25.77-2.773.347-5.578.347-8.35 0-.218-6.255-1.177-12.461-2.859-18.488-.297-1.297-.808-2.535-1.511-3.663-1.235-1.796-3.264-2.838-5.181-3.81-4.486-2.191-9.174-3.9353-13.998-5.2079-2.038-.5642-4.093-1.085-6.097-1.7359-1.683-.5729-6.407-2.6734-7.771-3.8105-.715-.5449-1.313-1.2294-1.759-2.0125-.445-.7831-.728-1.6485-.832-2.5444 0 .4514 13.16 1.3541 14.102 1.2499 3.169-.3385 6.908-2.1612 10.034-.8679 2.444 1.0068 4.68 3.1073 6.908 4.5568 2.703 1.7013 6.002 3.3504 8.169 5.8676z"
          fill="#473F47"
        />
        <path
          d="M130.208 97.7781l-16.062-7.8899 18.834-8.0288 16.071 7.0567-18.843 8.862z"
          fill="#61C79F"
        />
        <path
          d="M105.744 60.7327c0 .3038-.077.5989-.112.868-.475 4.4441-.043 8.8013.121 13.2193.104 2.7342.458 7.9421 3.351 9.3395 5.405 2.604 15.837 1.6145 15.837 1.6145 1.209-.1949 2.445-.1448 3.635.1475.648.1996 1.244.5382 1.874.7812 2.28.868 4.827.434 7.228 0 .414-.0493.813-.1822 1.174-.3906.419-.374.675-.8987.712-1.4607.037-.5619-.147-1.116-.513-1.5425-.779-.8231-1.793-1.3839-2.902-1.6058-3.031-.9947-6.278-1.1209-9.377-.3645-.397.1341-.8.2442-1.209.3298-.48.0782-.965.113-1.451.1042h-3.679c-4.231 0-8.221.052-8.86-4.9215-.236-1.842-.282-3.7035-.138-5.5551.251-3.3417 1.123-6.6574.941-9.9991-.011-1.0598-.274-2.1016-.768-3.0379-.251-.465-.615-.8575-1.06-1.1402-.444-.2827-.954-.446-1.479-.4743-.544.0408-1.068.2221-1.522.5262-.454.3041-.822.7208-1.069 1.2098-.382.7338-.63 1.5304-.734 2.3522z"
          fill="#FBC4D6"
        />
        <path
          d="M155.666 72.9971l-22.452 11.4833-3.005 13.2975 18.842-8.8621 6.615-15.9187z"
          fill="#61C79F"
        />
        <path
          d="M126.209 45.9511c-.024-.8264-.329-1.6195-.863-2.2481-.272-.3164-.592-.5861-.95-.7985-.501-.2952-.622-.3212-.95.1562-.423.6163-.561 1.3367-.95 1.979-.425.7124-1.018 1.3086-1.727 1.7359-.797.4968-1.723.7418-2.66.7031-.372-.0565-.75-.0565-1.122 0-.125.0238-.243.075-.346.15-.103.075-.189.172-.25.284-.089.3247-.121.6624-.095.9982-.078.868-.933 1.4842-1.408 2.2394-.475.7551-.613 1.8748-1.183 2.682-.106.162-.251.2936-.423.3819-.406.1736-.863-.052-1.287-.1302-1.252-.217-2.262.9548-3.333 1.6666-2.15 1.4235-4.965 1.0589-7.504.6336-.777-.0945-1.5348-.3113-2.2451-.6423-.7671-.4551-1.4482-1.0428-2.012-1.736-.9412-1.0416-1.8739-2.1005-2.7978-3.1594-.3434-.3391-.6164-.7433-.8031-1.1892-.0989-.3109-.1254-.6405-.0777-.9634.0842-.6028.262-1.1885.5267-1.736.6736-1.5189 1.4594-3.1681 2.9792-3.8538 1.5198-.6857 3.3158-.1736 4.9908-.3472.205-.0004.404-.0641.57-.1823.134-.1514.229-.3331.277-.5294.699-2.3349 1.571-4.8694 3.661-6.0759 1.61-.7775 3.426-1.0178 5.181-.6857 1.739.3301 3.512.4322 5.276.3038.864-.1389 1.728-.4253 2.591-.5989 2.019-.451 4.133-.1422 5.941.868.893.5337 1.639 1.2818 2.173 2.1772.533.8953.837 1.9099.884 2.9525-.035.4072-.035.8167 0 1.2239.061.3819.225.7551.285 1.137.035.3301.001.664-.101.9797-.103.3157-.27.6061-.492.8521-.222.246-.493.4419-.796.575-.302.1331-.629.2003-.96.1972z"
          fill="#FF681C"
        />
        <path
          d="M104.958 63.1978c-.266 2.4565-.295 4.9331-.086 7.3952-.01.2136.044.4255.155.6076.184.2019.437.3261.708.3472 1.399.2616 2.818.3981 4.24.4079.2.0641.411.0832.619.0559.208-.0273.407-.1003.583-.2139.177-.1136.326-.2648.438-.4431.112-.1782.183-.379.208-.588.778-3.2636 1.546-6.5272 2.133-9.8342.233-1.3281.398-2.821-.397-3.8973-1.148-1.5623-4.248-1.7359-5.742-.5989-1.805 1.3975-2.574 4.6611-2.859 6.7616zM129.397 59.0315l2.443 5.8849c.121.2288.17.4893.139.7465-.063.2111-.182.4005-.346.5468-1.194 1.2688-2.611 2.3047-4.179 3.0553-1.447-1.299-2.621-2.8747-3.454-4.635-.812-2.0919-.631-4.418-.389-6.6488.147-1.4148.095-5.963 2.487-4.201 1.667 1.2065 2.547 3.4372 3.299 5.2513zM85.1925 114.235c.0008.802-.1611 1.596-.4759 2.333-.3147.737-.7757 1.402-1.3547 1.955-.998.95-2.2841 1.537-3.6528 1.666-.256.013-.5125.013-.7685 0l-42.8917-.868c-1.6467-.018-3.2214-.681-4.3891-1.848-1.1676-1.167-1.836-2.746-1.8629-4.401-.0008-.803.1611-1.597.4759-2.334.3147-.737.7757-1.402 1.3548-1.954.5871-.568 1.2799-1.013 2.0385-1.311.7587-.298 1.5684-.442 2.3828-.425h1.4593c-.3059-1.067-.46-2.171-.4576-3.281-.003-1.582.3157-3.148.9364-4.6017.6207-1.4538 1.5303-2.7647 2.6731-3.8525 1.0069-.9683 2.1763-1.75 3.4542-2.3088 1.6543-.7256 3.4457-1.081 5.2502-1.0416l3.6442.0781c2.2529.0422 4.454.6868 6.377 1.8675 1.9229 1.1808 3.4982 2.8551 4.5639 4.8507 1.0536-.4942 2.2053-.7406 3.3678-.7204h.9413c1.9514.0245 3.8166.8123 5.1999 2.1957 1.3832 1.384 2.1756 3.255 2.2092 5.217v.356c.0034.673-.0926 1.343-.285 1.987l3.5491.078c1.6675.017 3.2611.694 4.4337 1.886s1.8293 2.801 1.8269 4.477z"
          fill="#fff"
        />
        <path
          d="M79.7091 120.189c-.256.014-.5125.014-.7685 0l-42.8917-.868c-1.6467-.017-3.2214-.681-4.3891-1.848-1.1676-1.167-1.836-2.746-1.8629-4.401-.0008-.802.1611-1.596.4759-2.333.3147-.738.7757-1.403 1.3548-1.955-1.6839 10.642 9.3693 9.123 9.3693 9.123h27.8662l10.846 2.282z"
          fill="url(#paint9_linear)"
        />
        <path
          d="M40.6172 108.333l-3.1087-1.189c-.3059-1.067-.46-2.172-.4577-3.281-.0029-1.582.3158-3.148.9365-4.6021.6206-1.4537 1.5303-2.7647 2.6731-3.8525 1.0069-.9683 2.1763-1.75 3.4541-2.3088-8.6094 7.4304-3.4973 15.2334-3.4973 15.2334z"
          fill="url(#paint10_linear)"
        />
        <path
          d="M198.332 63.7878c.001.803-.162 1.5977-.479 2.3351-.316.7374-.779 1.4019-1.36 1.9527-1.002.9504-2.291 1.537-3.662 1.6665-.256.022-.513.022-.768 0l-42.883-.868c-1.633-.0219-3.194-.6789-4.355-1.8328-1.161-1.154-1.831-2.7152-1.872-4.3559-.008-.8103.149-1.6139.462-2.3605.314-.7467.777-1.4205 1.361-1.9794 1.194-1.1377 2.784-1.7607 4.429-1.7359h1.451c-.302-1.0644-.456-2.1656-.457-3.2723-.003-1.5819.316-3.1477.937-4.6014.62-1.4536 1.53-2.7647 2.672-3.8527 1.007-.9704 2.176-1.7549 3.454-2.3176 1.654-.7263 3.446-1.0818 5.251-1.0415l3.644.0781c2.253.0418 4.454.6873 6.375 1.8698 1.922 1.1826 3.495 2.8593 4.557 4.857 1.051-.5014 2.205-.7481 3.368-.7204h.941c1.952.0201 3.82.8049 5.205 2.1877 1.385 1.3827 2.179 3.2541 2.213 5.2162v.3559c-.001.6762-.1 1.3488-.294 1.9963l3.549.0694c1.665.0206 3.255.6985 4.426 1.8873 1.171 1.1888 1.83 2.7931 1.835 4.4664z"
          fill="#fff"
        />
        <path
          d="M192.84 69.7423c-.256.022-.513.022-.769 0l-42.883-.868c-1.634-.0197-3.197-.6757-4.359-1.8299-1.163-1.1542-1.835-2.7167-1.876-4.3588-.008-.8104.149-1.6139.462-2.3606.314-.7466.777-1.4204 1.361-1.9793-1.728 10.6501 9.369 9.1225 9.369 9.1225h27.866l10.829 2.2741z"
          fill="url(#paint11_linear)"
        />
        <path
          d="M153.757 57.8854l-3.118-1.1891c-.301-1.0644-.455-2.1656-.457-3.2723-.003-1.5819.316-3.1477.937-4.6014.62-1.4536 1.53-2.7647 2.672-3.8527 1.007-.9704 2.177-1.7549 3.454-2.3176-8.6 7.43-3.488 15.2331-3.488 15.2331z"
          fill="url(#paint12_linear)"
        />
        <path
          d="M117.047 47.4959c-.125.0238-.243.075-.346.15-.103.0751-.188.172-.25.284-.089.3247-.121.6625-.095.9982-.077.868-.932 1.4842-1.407 2.2394-.475.7551-.613 1.8748-1.183 2.6821-.106.1619-.252.2935-.423.3819-.406.1736-.864-.0521-1.287-.1302-1.252-.217-2.263.9547-3.333 1.6665-2.151 1.4235-4.966 1.0589-7.504.6336-.799-.0937-1.5779-.3164-2.3061-.6596-.7671-.4551-1.4482-1.0428-2.012-1.736-.9412-1.0416-1.8739-2.1005-2.7978-3.1595-.3434-.339-.6164-.7432-.8031-1.1891-.0989-.311-.1254-.6406-.0777-.9635.4027-.2443.8209-.4618 1.2521-.6509 1.3237-.7141 2.8711-.8852 4.3177-.4774 1.1571.4513 1.9779 1.4842 2.9709 2.222 1.385.9747 3.069 1.4225 4.752 1.2635 1.684-.159 3.256-.9145 4.436-2.1315.435-.5763.946-1.0902 1.519-1.5276 1.028-.5642 3.118-.4774 4.577.1041z"
          fill="url(#paint13_linear)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="172.633"
          y1="154.77"
          x2="168.681"
          y2="104.117"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".01" />
          <stop offset=".13" stopOpacity=".69" />
          <stop offset=".25" stopOpacity=".32" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="1293.14"
          y1="2403.49"
          x2="1712.95"
          y2="2312.92"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".01" />
          <stop offset=".13" stopOpacity=".69" />
          <stop offset=".25" stopOpacity=".32" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="5098.23"
          y1="26478.4"
          x2="-72.7671"
          y2="-10694.2"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".01" />
          <stop offset=".13" stopOpacity=".69" />
          <stop offset=".25" stopOpacity=".32" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="9380.39"
          y1="19122.8"
          x2="7092.2"
          y2="-8377.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".01" />
          <stop offset=".13" stopOpacity=".69" />
          <stop offset=".25" stopOpacity=".32" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="-9224.4"
          y1="1289.95"
          x2="-9401.82"
          y2="1405.34"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".01" />
          <stop offset=".13" stopOpacity=".69" />
          <stop offset=".25" stopOpacity=".32" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="-13034.1"
          y1="1454.57"
          x2="-13085.8"
          y2="1233.33"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".01" />
          <stop offset=".13" stopOpacity=".69" />
          <stop offset=".25" stopOpacity=".32" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear"
          x1="-37306.5"
          y1="3191.62"
          x2="-39754"
          y2="6958.98"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".01" />
          <stop offset=".13" stopOpacity=".69" />
          <stop offset=".25" stopOpacity=".32" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear"
          x1="3173.18"
          y1="1001.51"
          x2="2771.02"
          y2="1960.36"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".01" />
          <stop offset=".13" stopOpacity=".69" />
          <stop offset=".25" stopOpacity=".32" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint8_linear"
          x1="-3388.79"
          y1="472.491"
          x2="-3477.62"
          y2="583.856"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".01" />
          <stop offset=".13" stopOpacity=".69" />
          <stop offset=".25" stopOpacity=".32" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint9_linear"
          x1="3618.49"
          y1="1987.14"
          x2="3606.57"
          y2="1317.02"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".01" />
          <stop offset=".13" stopOpacity=".69" />
          <stop offset=".25" stopOpacity=".32" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint10_linear"
          x1="227.065"
          y1="2120.92"
          x2="646.894"
          y2="2030.4"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".01" />
          <stop offset=".13" stopOpacity=".69" />
          <stop offset=".25" stopOpacity=".32" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint11_linear"
          x1="10266"
          y1="1273.04"
          x2="10254"
          y2="603.155"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".01" />
          <stop offset=".13" stopOpacity=".69" />
          <stop offset=".25" stopOpacity=".32" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint12_linear"
          x1="1265.68"
          y1="1185.28"
          x2="1685.5"
          y2="1094.71"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".01" />
          <stop offset=".13" stopOpacity=".69" />
          <stop offset=".25" stopOpacity=".32" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint13_linear"
          x1="3762.92"
          y1="832.457"
          x2="3263.57"
          y2="-96.8235"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".01" />
          <stop offset=".13" stopOpacity=".69" />
          <stop offset=".25" stopOpacity=".32" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h264v200H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
