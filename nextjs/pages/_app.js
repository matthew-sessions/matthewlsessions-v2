import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import Script from 'next/script';

library.add(fab)

// <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=UA-108410204-1"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'UA-108410204-1');
// </script>


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id="goolgecall" strategy="lazyOnLoad"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-108410204-1`}
      />
      <Script id="googlescript" strategy="lazyOnLoad">
        {
          `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'UA-108410204-1');`
        }
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
