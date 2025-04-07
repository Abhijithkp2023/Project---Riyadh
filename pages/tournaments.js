import ComingTournaments from "@/components/ComingTournaments";
import HeroBanner from "@/components/HeroBanner";
import MediaList from "@/components/MediaList";
import PastTournaments from "@/components/PastTournaments";
import Head from "next/head";
import React from "react";

const tournaments = () => {
  return (
    <>
      <Head>
        <title>Tournaments</title>
        <meta name="description" content="Tournaments" />
      </Head>

      <HeroBanner imageUrl="/tournament_hero_bg.png" title="Tournaments" />
      <MediaList />
      <ComingTournaments />
      <PastTournaments />
    </>
  );
};

export default tournaments;
