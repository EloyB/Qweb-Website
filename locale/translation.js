import enUS from "./enUS";
import nl from "./nl";

export const activeLocale = (locale) => {
  return locale === "en-US" ? enUS : nl;
};

export const toggleLocale = (locale, router) => {
  router.push(router.pathname, router.pathname, { locale });
};
