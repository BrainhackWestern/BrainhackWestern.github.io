import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import ScreenSizeProvider from '../services/screen-size/provider'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap");
  }, []);
  
  return (
    <ScreenSizeProvider>
      <Component {...pageProps} />
    </ScreenSizeProvider>
  )
}
export default MyApp
