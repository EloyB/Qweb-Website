import { CgBrowser } from "react-icons/cg";
import { RiDashboardLine } from "react-icons/ri";
import { GoDeviceMobile } from "react-icons/go";

export default {
  homePage: {
    heroSection: {
      title:
        "Providing <span class='text-primary'>digital solutions</span> for everybody",
      subtitle: "Check what we can do to help you launch your business",
      buttonText: "Launch",
    },
    bannerSection: {
      title: "We are <span class='text-primary'>Qweb</span>",
      subtitle:
        "A Belgian based company with an expertise in web and application development. Designing and developing your business solutions!",
    },
    serviceSection: {
      title: "Offering a variety of <span class='text-primary'>services</span>",
      buttonText: "More info",
      cardsSection: [
        {
          title: "Website",
          description:
            "The best way to open your business to the world wide web. Want to use one of our templates or have a unique design? Let's sit together!",
          icon: <CgBrowser className="w-6 h-6 text-white" />,
          link: "/websites",
        },
        {
          title: "Web App",
          description:
            "An internal application or an one where your clients can interact with?",
          icon: <RiDashboardLine className="w-6 h-6 text-white" />,
          link: "/webapps",
        },
        {
          title: "Mobile App",
          description:
            "Your business in your clients pocket. Today almost everybody has a mobile device, why don't benefit that?",
          icon: <GoDeviceMobile className="w-6 h-6 text-white" />,
          link: "/",
        },
      ],
    },
    whyCodeSection: {
      title:
        "<span class='text-primary'>Coding</span> everything ourselves, but why?",
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
    ctoSection: {
      title: "Getting <span class='text-primary'>interested</span> already?",
      description:
        "Feel free to ask all your question or follow us on social media to keep updated about out work",
    },
  },
  websitesPage: {
    heroSection: {
      title:
        "Boost your business with its own <span class='text-primary'>website</span>",
      description: "Providing options in all shapes, sizes and priceranges",
    },
    templatesSection: {
      title: "Our <span class='text-primary'>costefficient</span> templates",
      description:
        "An already designed website. Customizable to your corporate identity.",
      cardSection: [
        {
          title: "Cheaper",
          description:
            "We already designed a few templates for you to choose from so we can deliver faster and still give it a look and feel you like",
        },
        {
          title: "Faster",
          description:
            "We already designed a few templates for you to choose from so we can deliver faster and still give it a look and feel you like",
        },
        {
          title: "Customizable",
          description:
            "We already designed a few templates for you to choose from so we can deliver faster and still give it a look and feel you like",
        },
      ],
    },
    customSection: {
      title: "Be more <span class='text-primary'>unique</span>",
      description:
        "A unique design to stand out on the world wide web. Together with you we will create one that totally suits your needs and expectations.",
    },
    moreSection: {
      title: "<span class='text-primary'>More</span> than just a website",
      description:
        "The next step is getting that website on top of the search results and easy to be found by everybody. We got you covered on that as well.",
      cardSection: [
        {
          title: "SEO",
          description:
            "The next step is getting that website on top of the search results and easy to be found by everybody. We got you covered on that as well.",
        },
        {
          title: "Analytics",
          description:
            "The next step is getting that website on top of the search results and easy to be found by everybody. We got you covered on that as well.",
        },
        {
          title: "Ads",
          description:
            "The next step is getting that website on top of the search results and easy to be found by everybody. We got you covered on that as well.",
        },
      ],
    },
    ctoSection: {
      title: "Asking <span class='text-primary'>questions</span> is free",
      description:
        "Want a quotation without obligation? Let us know and we will provide you all the needed information.",
    },
  },
  templatesPage: {
    heroSection: {
      title:
        "A variety of <span class='text-primary'>templates</span> to choose from",
      description:
        "Puzzle away with our templates. Find one that suits your needs and we'll make it work.",
    },
    templatesSection: {
      title:
        "All <span class='text-primary'>extendable</span> to as much pages as you like",
      description:
        "Our templates are build upon our custom made components. This way we can customize fast and easy.",
    },
    ctoSection: {
      title: "Did something catch your eye?",
      description:
        "Let us know which one you liked and we'll give it your look and feel",
    },
  },
  webappsPage: {
    heroSection: {
      title:
        "Let people <span class='text-primary'>interact</span> with your business",
      description:
        "An easy way for people to interact with your business. A webshop or an internal platform? We got you covered.",
    },
    differenceSection: {
      title: "Web app or website? The same but different",
      description: "While looking the same, the both serve a different purpose",
      cards: [
        {
          title: "Website",
          features: [
            "Accessed using browser",
            "Displays information to the user",
            "User can not interact back to the site",
          ],
        },
      ],
    },
  },
};
