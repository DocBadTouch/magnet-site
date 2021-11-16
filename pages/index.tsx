import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Overview } from '../components/Hero';
import { Body } from '../components/Overview';
import { Token } from '../components/Token';
import { Tokenomics } from '../components/Tokenomics';
import { Roadmap } from '../components/Roadmap';
import { Community } from '../components/Community';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['body','community','faq', 'header','overview','roadmap','tokenomics'])),
      // Will be passed to the page component as props
    },
  };
}


const Home: NextPage = () => {
  return (
    <div>
      <Head >
      <meta charSet="utf-8"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5, user-scalable=1, viewport-fit=cover"/>
      <meta name="description" content="..."/>
      <link rel="preload" href="../assets/fonts/lufga-bold.woff2" as="font" crossOrigin="anonymous"/>
      <title>Magnet DAO | Revolutionizing early-stage investing</title>
      
      <link rel="icon" type="image/svg+xml" href="../assets/img/favicon.svg"/>
      <link rel="alternate icon" href="assets/img/favicon.ico"/>
      <meta property="og:title" content="Magnet DAO | Revolutionizing early-stage investing"/>
      <meta property="og:image" content="../assets/img/radar.png"/>
      <meta property="og:description" content="..."/>
      <meta property="og:url" content="https://magnetdao.finance"/>
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />

      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@magnet_dao"/>
      <meta name="twitter:title" content="Magnet DAO | Revolutionizing early-stage investing"/>
      <meta name="twitter:description" content="..."/>
      <meta name="twitter:image" content="../assets/img/radar.png"/>
      </Head>
      <body>
      <main>
        
        <Overview />
        <Body />
        <Token />
        <Tokenomics />
        <Roadmap />
        <Community />
        <FAQ/>
        <Footer/>
      </main>
      <Header />
      </body>
    </div>
  )
}

export default Home
