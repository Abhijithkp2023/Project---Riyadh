import HeroBanner from '@/components/HeroBanner'
import Head from 'next/head'
import React from 'react'

const contact = () => {
  return (
    <>
    <Head>
      <title>Contact Us</title>
      <meta name="description" content="Contact Us" />
    </Head>

    <HeroBanner
      imageUrl="/contact_hero_bg.png"
      title="Contact Us"
    />
    {/* <About content={aboutMembership} /> */}
  </>
  )
}

export default contact
