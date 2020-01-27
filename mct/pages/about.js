import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const About = () => (
  <div>
    <Head>
      <title>About</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
    </Head>

    <Nav />

    <div className="container mx-auto text-center">
      <h1 className="text-6xl m-12">Macro Compliance Tracker!</h1>
      <p className="text-xl">
        This app will help you ensure your macros are within a selected range to help you achieve your New Years Resolution!
      </p>
    </div>
  </div>
)

export default About
