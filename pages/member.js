import HeroBanner from "@/components/HeroBanner";
import MembershipForm from "@/components/MembershipForm";
import Head from "next/head";
import React from "react";

const member = () => {
  return (
    <>
      <Head>
        <title>Become a Member</title>
        <meta name="description" content="Membershi page" />
      </Head>

      <HeroBanner
        imageUrl="/member_hero_bg.png"
        title="Become a Member"
      />
      <MembershipForm />
      {/* <About content={aboutMembership} /> */}
    </>
  );
};

export default member;
