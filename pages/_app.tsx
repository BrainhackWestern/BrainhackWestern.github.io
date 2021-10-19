import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import ScreenSizeProvider from '../services/screen-size/provider'
import { Responsive } from '../components/util/responsive'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScreenSizeProvider>
      <Responsive />
      <Component {...pageProps} />
    </ScreenSizeProvider>
  )
}
export default MyApp
