import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Body } from '../components/Body'
import { Tokenomics } from '../components/Tokenomics'
import { Roadmap } from '../components/Roadmap'
import { Community } from '../components/Community'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Magnet DAO</title>
        <meta name="description" content="Magnet DAO is a new, innovative project which implements protocol controlled value and deflationary mechanisms in order to create long-standing value for tokenholders." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main />
      <Body />
      <Tokenomics />
      <Roadmap />
      <Community />

    </div>
  )
}

export default Home
