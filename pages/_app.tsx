import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import ScreenSizeProvider from '../services/screen-size/provider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScreenSizeProvider>
      <Component {...pageProps} />
    </ScreenSizeProvider>
  )
}
export default MyApp
