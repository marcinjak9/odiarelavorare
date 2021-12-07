import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import Head from 'next/head';

function MyApp({ Component, pageProps, children }) {
  return (
    <Component {...pageProps}>
      <Head>
        {/* <link
          rel="preload"
          href="/public/fonts/CircularStd-Bold.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/public/fonts/CircularStd-Bold.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/public/fonts/CircularStd-Black.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/public/fonts/CircularStd-Black.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/public/fonts/CircularStd-Book.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/public/fonts/CircularStd-Book.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/public/fonts/CircularSpotifyText-Light.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/public/fonts/CircularSpotifyText-Light.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/public/fonts/CircularStd-Medium.woff2"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/public/fonts/CircularStd-Medium.woff"
          as="font"
          crossOrigin=""
        /> */}
      </Head>
      {children}
    </Component> 
  )
}

export default MyApp