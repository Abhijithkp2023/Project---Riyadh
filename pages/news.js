import HeroBanner from "@/components/HeroBanner";
import MediaList from "@/components/MediaList";
import News from "@/components/News";
import Head from "next/head";
import React from "react";



const news = () => {
  return (
    <>
      <Head>
        <title>News</title>
        <meta name="description" content="News" />
      </Head>

      <HeroBanner imageUrl="/news_hero_bg.png" title="News" />
      <MediaList />
      <News />
    </>
  )
}

export default news
