import HeroBanner from "@/components/HeroBanner";
import MediaList from "@/components/MediaList";
import Head from "next/head";
import React from "react";
import ImageCollage from "@/components/ImageCollage";

const gallery = () => {
  return (
    <>
      <Head>
        <title>Gallery</title>
        <meta name="description" content="Gallery" />
      </Head>
      <HeroBanner imageUrl="/gallery_hero_bg.png" title="Gallery" />
      <MediaList />
     <ImageCollage />
    </>
  );
};

export default gallery;
