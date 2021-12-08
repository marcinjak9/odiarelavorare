import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import Head from 'next/head';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps, children }) {
  return (
    <Component {...pageProps}>
      <Head>
      </Head>
      <Nav />
      {children}
    </Component> 
  )
}

export default MyApp