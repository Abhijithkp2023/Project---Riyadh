import HeroBanner from '@/components/HeroBanner'
import Head from 'next/head'
import React from 'react'

const tournaments = () => {
  return (
    <>
    <Head>
      <title>Tournaments</title>
      <meta name="description" content="Tournaments" />
    </Head>

    <HeroBanner
      imageUrl="/tournament_hero_bg.png"
      title="Tournaments"
    />
    {/* <About content={aboutMembership} /> */}
  </>
  )
}

export default tournaments
