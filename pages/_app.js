import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/General/layout";
import "../styles/globals.css";
import { analytics } from "../utils/firebase";

function MyApp({ Component, pageProps }) {
  const routers = useRouter();

  useEffect(() => {
    const logEvent = (url) => {
      analytics().setCurrentScreen(url);
      analytics().logEvent("screen_view");
    };

    routers.events.on("routeChangeComplete", logEvent);
    logEvent(window.location.pathname);

    return () => {
      routers.events.off("routeChangeComplete", logEvent);
    };
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
