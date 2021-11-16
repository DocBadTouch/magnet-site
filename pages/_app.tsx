//import '../styles/globals.css'
import '../assets/css/normalize.css'   
import '../assets/css/style.css'  
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp);
