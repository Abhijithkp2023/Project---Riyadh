import Contact from '@/components/Contact'
import HeroBanner from '@/components/HeroBanner'
import Head from 'next/head'
import React from 'react'
import { useTranslation } from 'react-i18next'

const contact = () => {
  const  {t} = useTranslation("common")
  return (
    <>
    <Head>
      <title>Contact Us</title>
      <meta name="description" content="Contact Us" />
    </Head>

    <HeroBanner
      imageUrl="/contact_hero_bg.png"
      title={t("nav.contact_us")}
    />
    {/* <About content={aboutMembership} /> */}
    <Contact />
  </>
  )
}

export default contact
