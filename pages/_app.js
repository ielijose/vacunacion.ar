import { DefaultSeo } from 'next-seo';
import SEO from '../config/seo';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
