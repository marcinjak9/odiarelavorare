import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css';
import Head from 'next/head';
import Nav from '../components/Nav';


function MyApp({ Component, pageProps, children }) {
  return (
    <Component {...pageProps}>
      <Head>
        <title>Odiare Lavorare</title>
        <meta
          name="description"
          content="Pillole e testimonianze per ricordarci quanto faccia schifo lavorare"
        />
      </Head>
      <Nav />
      {children}
    </Component> 
  )
}

export default MyApp