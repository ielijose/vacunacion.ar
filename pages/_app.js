import { useEffect } from 'react';

import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';

import SEO from '../config/seo';
import { trackPageview } from '../lib/ga';

import '../styles/globals.css';

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      trackPageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
