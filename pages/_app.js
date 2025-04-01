import Layout from "@/components/Layout";
// import style from "@/styles/global.module.scss"
import "@/styles/global.scss";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "@/styles/_base.scss";

import "../i18n";

export default function App({ Component, pageProps }) {

  

  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import("aos")).default;
      AOS.init({
        duration: 800,
        once: false,
        offset: 120,
      });
    };
    initAOS();
  }, []);

  // useEffect(() => {
  //   const lang = localStorage.getItem("language") || "en";
  //   document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  //   console.log( document.documentElement.dir)
  // }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
