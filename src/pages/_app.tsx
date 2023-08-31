import type { AppProps } from 'next/app';
import NextNPProgress from 'nextjs-progressbar';
import ScreenSizeProvider from '../services/screen-size/provider';
import ScrollPositionProvider from '../services/scroll-position/provider';
import '../styles/globals.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   // @ts-ignore
  //   import('bootstrap/dist/js/bootstrap');
  // }, []);

  return (
    <ScrollPositionProvider>
      <ScreenSizeProvider>
        <NextNPProgress />
        <Component {...pageProps} />
      </ScreenSizeProvider>
    </ScrollPositionProvider>
  );
}
export default MyApp;
