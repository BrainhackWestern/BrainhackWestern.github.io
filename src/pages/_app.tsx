import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import ScreenSizeProvider from '../services/screen-size/provider';
import ScrollPositionProvider from '../services/scroll-position/provider';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <ScrollPositionProvider>
      <ScreenSizeProvider>
        <Component {...pageProps} />
      </ScreenSizeProvider>
    </ScrollPositionProvider>
  );
}
export default MyApp;
