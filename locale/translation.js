export const activeLocale = (locale) => {
  return locale === "en-US" ? enUS : nl;
};

export const toggleLocale = (locale, router) => {
  router.push(router.pathname, router.pathname, { locale });
};

const enUS = {
  heroSection: {
    title: "Launch your business to the <span class='text-primary'>world wide web</span>",
    subtitle: "Ready for take off?",
    buttonText: "Launch",
  },
  bannerSection: {
    title: "We are <span class='text-primary'>Qweb</span>",
    subtitle:
      "A Belgian based company with an expertise in web and application development. Designing and developing your business solutions!",
  },
  infoSection: {
    title1: "Design together",
    title2: "We write the code",
    title3: "Ready for the world wide web",
    subtitle1:
      "A good design is the beginning of an awesome website. Together with you we design a website that totally suits your needs and expectations. Starting with simple mockups and ending with a fully functional design so you already have an idea how the finished product will look and feel.",
    subtitle2:
      "The part where we work our magic. We will choose the best technologies suited for your project. We will provide you with a testing environment so you can check all functionalities that are done. This way we can quickly detect problems or improvements that have to be made.",
    subtitle3:
      "The end of the ride. Providing you with the fully finished product. We will put the website online and provide you with all the needed links and support when needed. Take a look on our instagram to see the projects we already finished for our clients.",
  },
  moreSection: {
    title: "But wait... There is <span class='text-primary'>more!</span>",
    subtitle: "Because you know. The more, the better",
    seo: {
      title: "SEO",
      description:
        "Having a website is one thing, getting it on top of the Google search results is something else. That's what we call SEO. We will optimize your website to be found according to the most usefull keywords.",
    },
    analytics: {
      title: "Analytics & Ads",
      description:
        "Knowing how many users you get on your website and learning from that is like a bit of magic. Combining that with Google ads makes your website very powerfull amongst others. Let us find the best ad campaigns together!",
    },
    hosting: {
      title: "Hosting",
      description:
        "A website needs to be hosted somewhere so it can actually be put on the web. Paired with this comes a domainname. We can provide the both for you!",
    },
  },
  contactSection: {
    title: "Let's <span class='text-primary'>link up</span>",
    description:
      "Feel free to ask all your question or follow us on social media to keep updated about out work",
    form: {
      email: "Email",
      name: "Name",
      message: "Message",
      buttonText: "Send message",
    },
  },
};

const nl = {
  heroSection: {
    title: "Lanceer je zaak naar <span class='text-primary'>het wereldwijde web</span>",
    subtitle: "Klaar om te lanceren?",
    buttonText: "Lanceer",
  },
  bannerSection: {
    title: "Wij zijn <span class='text-primary'>Qweb</span>",
    subtitle:
      "Een Kempisch bedrijf met een expertise in web en applicatie development. Wij ontwerpen en ontwikkelen jouw business oplossing!",
  },
  infoSection: {
    title1: "Samen ontwerpen",
    title2: "Wij schrijven de code",
    title3: "Klaar voor het wereldwijde web",
    subtitle1:
      "Een goed ontwerp is het begin van een geweldige website. Samen met jou ontwerpen we een website die helemaal voldoet aan jouw eisen en verwachtingen. Beginnend met simpele proefmodellen en eindigend met een volledig functioneel ontwerp zodat je al een idee kan krijgen hoe de website er op het einde uit zal zien en zal werken.",
    subtitle2:
      "Het deel waar wij onze magie laten werken. Wij kiezen voor jouw project de beste technologiën en voorzien jou van een test omgeving. hier kan je de functionaliteiten die al gemaakt zijn grondig kan testen. Op deze manier kunnen we snel problemen detecteren of verbeteringen aanbrengen.",
    subtitle3:
      "Het einde van de rit. Wij leveren jou een volledig afgewerkt product af. Indien jij dit wenst, zetten wij de website online voor jou. Neem zeker een kijkje op onze instagram pagina om enkele van onze afgewerkte producten te zien.",
  },
  moreSection: {
    title: "Maar wacht... er is <span class='text-primary'>meer!</span>",
    subtitle: "Want je weet. Hoe meer, hoe beter",
    seo: {
      title: "SEO",
      description:
        "Een website hebben is een ding, het vanboven aan de zoekresultaten van Google krijgen is iets anders. Dat is wat wij SEO noemen. Wij optimaliseren jouw website om gevonden te worden op de juiste manieren en aan de hand van de juiste sleutelwoorden.",
    },
    analytics: {
      title: "Analytics & Ads",
      description:
        "Weten hoeveel en welke soort gebruikers je website heeft is een beetje als magie. Dit doen we door gebruik te maken van Google Analytics. Dit paren met Google Ads maakt jouw website ontzettend sterk tegenover anderen. Laten we samen zoeken naar de beste advertentie campagnes!",
    },
    hosting: {
      title: "Hosting",
      description:
        "Een website kan niet zomaar online komen te staan. Dit wordt gedaan via hosting. Dit gaat gepaard met een domeinnaam zodat mensen je website vinden via de door jouw gekozen link. Ook dit kunnen wij voorzien.",
    },
  },
  contactSection: {
    title: "Wij horen graag van jou!",
    description: "Stel al je vragen of volg ons op social media om al onze projecten te zien",
    form: {
      email: "Email",
      name: "Naam",
      message: "Bericht",
      buttonText: "Verstuur bericht",
    },
  },
};
