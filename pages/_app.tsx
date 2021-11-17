//import '../styles/globals.css'
import '../assets/css/normalize.css'   
import '../assets/css/style.css' 
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app'
import { useRef } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  
  return <Component {...pageProps} />
}
//const titleObservers = useRef<IntersectionObserver>()
//const crossHairObserver = useRef<IntersectionObserver>()

export default appWithTranslation(MyApp);
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

