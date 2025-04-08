import React from "react";
import About from "@/components/About";
import Head from "next/head";
import HeroBanner from "@/components/HeroBanner";
import MembershipBadge from "@/components/MembershipBadge";
import JointMembership from "@/components/JointMembership";
import PremiumMembership from "@/components/PremiumMembership";
import MidWeekMembership from "@/components/MidWeekMembership";
import { useTranslation } from "react-i18next";

const Membership = () => {
  const { t } = useTranslation("common");
  const aboutMembership = {
    heading: "aboutMembership.heading",
    para: "aboutMembership.para",
    buttonText: "aboutMembership.btn_text",
  };

  return (
    <>
      <Head>
        <title>Membership</title>
        <meta name="description" content="Membership page" />
      </Head>

      <HeroBanner
        imageUrl="/membership_hero_bg.png"
        title={t("nav.membership")}
      />
      <About content={aboutMembership} />
      <MembershipBadge />
      <JointMembership />
      <PremiumMembership />
      <MidWeekMembership />
    </>
  );
};

export default Membership;
