import HeroBanner from "@/components/HeroBanner";
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
      {/* <About content={aboutMembership} /> */}
    </>
  );
};

export default member;
