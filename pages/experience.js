import Dining from "@/components/Dining";
import ExperienceShare from "@/components/ExperienceShare";
import HealthAndWellness from "@/components/HealthAndWellness";
import HeroBanner from "@/components/HeroBanner";
import NightGolf from "@/components/NightGolf";
import Padel from "@/components/Padel";
import Proshop from "@/components/Proshop";
import Review from "@/components/Review";
import Head from "next/head";
import React from "react";

const experience = () => {
  return (
    <>
      <Head>
        <title>Experience</title>
        <meta name="description" content="Experience page" />
      </Head>

      <HeroBanner
        imageUrl="/experience_hero_bg.png"
        title="Experience Our Activities"
      />
      <NightGolf />
      <HealthAndWellness />
      <Dining />
      <Padel />
      <Proshop />
      <Review />
      <ExperienceShare />
    </>
  );
};

export default experience;
