import Layout from "@/components/Layout";
// import style from "@/styles/global.module.scss"
import "@/styles/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
