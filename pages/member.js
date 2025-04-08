import HeroBanner from "@/components/HeroBanner";
import MembershipForm from "@/components/MembershipForm";
import Head from "next/head";
import React from "react";
import { useTranslation } from "react-i18next";

const member = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>Become a Member</title>
        <meta name="description" content="Membershi page" />
      </Head>

      <HeroBanner
        imageUrl="/member_hero_bg.png"
        title={t("nav.become_member")}
      />
      <MembershipForm />
      {/* <About content={aboutMembership} /> */}
    </>
  );
};

export default member;
