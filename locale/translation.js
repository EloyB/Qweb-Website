export const activeLocale = (locale) => {
  return locale === "en-US" ? enUS : nl;
};

export const toggleLocale = (locale, router) => {
  router.push(router.pathname, router.pathname, { locale });
};

const enUS = {
  heroSection: {
    title: "Launch your business to the <span className='text-primary'>world wide web</span>",
    subtitle: "Ready for take off?",
    buttonText: "Launch",
  },
  bannerSection: {
    title: "We Are <span className='text-primary'>Qweb</span>",
    subtitle:
      "A Belgian based company with an expertise in web design. Designing and developing your websites.",
  },
  infoSection: {
    title1: "Let's design together",
    title2: "We write the code",
    title3: "Ready for the world wide web",
    subtitle1:
      "A good design is the beginning of an awesome website. Together with you we design a website that totally suits your needs and expectations. Starting with simple mockups and ending with a fully functional design so you already have an idea how the finished product will look and feel.",
    subtitle2:
      "The part where we work our magic. We will choose the best technologies suited for your project. We will provide you with a testing environment so you can check all functionalities that are done. This way we can quickly detect problems or improvements that have to be made.",
    subtitle3:
      "The end of the ride. Providing you with the fully finished product. We will put the website online and provide you with all the needed links and support when needed. Take a look on our instagram to see the projects we already finished for our clients.",
  },
};

const nl = {
  heroSection: {
    title: "Lanceer je zaak naar <span className='text-primary'>het wereldwijde web</span>",
    subtitle: "Klaar om te lanceren?",
    buttonText: "Lanceer",
  },
  bannerSection: {
    title: "Wij Zijn <span className='text-primary'>Qweb</span>",
    subtitle:
      "Een belgisch bedrijf met een expertise in web design. Ontwerp en ontwikkeling van jouw websites",
  },
  infoSection: {
    title1: "Laten we samen ontwerpen",
    title2: "Wij schrijven de code",
    title3: "Klaar voor 'the world wide web'",
    subtitle1:
      "Een goed ontwerp is het begin van een geweldige website. Samen met jou ontwerpen we een website die helemaal voldoet aan jouw eisen en verwachtingen. Beginnend met simpele proefmodellen en eindigend met een volledig functioneel ontwerp zodat je al een idee kan krijgen hoe de website er op het einde uit zal zien en zal werken.",
    subtitle2:
      "Het deel waar wij onze magie laten werken. Wij zullen voor jou project de beste technologien kiezen om mee te werken. Wij voorzien jou van een test omgeving waar jij al de functionaliteiten die al gemaakt zijn grondig kan testen. Op deze manier kunnen we snel problemen detecteren of verbeteringen aanbrengen.",
    subtitle3:
      "Het einde van de rit. Wij leveren jou een volledig afgewerkt product af. Wij zetten, indien u dit wenst, de website online en bezorgen u al de nodige informatie en ondersteuning die nodig is. Neem zeker een kijkje op onze instagram pagina om enkele van onze afgewerkte producten te zien.",
  },
};
