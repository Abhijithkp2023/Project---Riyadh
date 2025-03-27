import Layout from "@/components/Layout";
// import style from "@/styles/global.module.scss"
import "@/styles/global.scss";
import 'aos/dist/aos.css';
import { use, useEffect } from 'react';
import "@/styles/_base.scss";


export default function App({ Component, pageProps }) {
  
  useEffect(() => {
    const initAOS = async () => {
      const AOS = (await import('aos')).default
      AOS.init({
        duration: 800,
        once: false,
        offset: 120,
      })
    }
    initAOS()
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
