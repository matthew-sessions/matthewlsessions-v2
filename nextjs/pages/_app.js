import "tailwindcss/tailwind.css";
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab)


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
