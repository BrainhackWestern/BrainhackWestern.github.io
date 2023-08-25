import Document, { Html, Head, Main, NextScript } from 'next/document'
import { basePath } from '../utils/image-loader'
import { Helmet } from 'react-helmet'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
          <link
              href="https://fonts.googleapis.com/css2?family=Montserrat&family=Quicksand:wght@300;400;700&family=Fira+Mono&display=swap"
              rel="stylesheet"
          />
          <link rel="icon" href={`${basePath}/favicon.ico`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument