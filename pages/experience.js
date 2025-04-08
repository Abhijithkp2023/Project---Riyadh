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
import { useTranslation } from "react-i18next";

const experience = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>Experience</title>
        <meta name="description" content="Experience page" />
      </Head>

      <HeroBanner imageUrl="/experience_hero_bg.png" title={t("nav.exp")} />
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
