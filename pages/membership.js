import React from "react";
import About from "@/components/About";
import Head from "next/head";
import HeroBanner from "@/components/HeroBanner";
import MembershipBadge from "@/components/MembershipBadge";
import JointMembership from "@/components/JointMembership";
import PremiumMembership from "@/components/PremiumMembership";
import MidWeekMembership from "@/components/MidWeekMembership";

const Membership = () => {
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

      <HeroBanner imageUrl="/membership_hero_bg.png" title="Memberships" />
      <About content={aboutMembership} />
      <MembershipBadge />
      <JointMembership />
      <PremiumMembership />
      <MidWeekMembership />
    </>
  );
};

export default Membership;
