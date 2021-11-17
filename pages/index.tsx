import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Overview } from '../components/Overview';
import { Token } from '../components/Token';
import { Tokenomics } from '../components/Tokenomics';
import { Roadmap } from '../components/Roadmap';
import { Community } from '../components/Community';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
declare global {
  interface Window {
      FB:any;
  }
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['hero','overview','community', 'tokenomics','faq', 'header',,'roadmap',])),
      // Will be passed to the page component as props
    },
  };
}


const Home: NextPage = () => {
  //let window = 
  function startAnimations() {
    const titleObservers = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('outline-title-anim');
          return;
        }
        entry.target.classList.remove('outline-title-anim');
      });
    });
    const crossHairObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('inview');
          return;
        }
        entry.target.classList.remove('inview');
      });
    });
  
    document.querySelectorAll('.outline-title').forEach(el => {
      titleObservers.observe(el);
      //el.querySelector('.outline').classList.add('faded')
    });
    document.querySelectorAll('.crosshair').forEach(el => {
      crossHairObserver.observe(el);
      //el.querySelector('.outline').classList.add('faded')
    });
    window.onscroll = function () {
      scrollRotate();
    };
  
    function scrollRotate() {
      document.querySelectorAll(".crosshair.inview").forEach(el => {
        el.setAttribute("style", "--rotate: " + window.pageYOffset / 2 + "deg");
      });
  
    }
  }
  //window.addEventListener('load',startAnimations)
  return (
    <div id='bodyDiv'>
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
      
      <main onLoad={startAnimations}>
        <Hero/>
        <Overview />
        <Token />
        <Tokenomics />
        <Roadmap />
        <Community />
        <FAQ/>
        <Footer/>
      </main>
      <Header />
    </div>
    
  )
}

export default Home
