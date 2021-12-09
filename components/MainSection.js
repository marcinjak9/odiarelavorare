import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Quote from '../components/Quote';
import Wrapper from '../components/Wrapper';
import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'



// const colors = chroma.scale(['#FF5F5D','#121212']).mode('lch').colors(10);

const randomFromRange = (min, max) => Math.floor(Math.random() * (max-min) +min);

export default function MainSection() {
  const router = useRouter()
  const { id } = router.query

  const [quote,setQuote] = useState()
  const [data, setData] = useState([])
  const [modal, setModal] = useState()
  
  useEffect(() => {
    fetch('/dataentry.csv')
      .then((r) => r.text())
      .then((r) => {
        const { data } = Papa.parse(r)
        const formatted = data.map((item) => ({
          [data[0][0]]: item[0],
          [data[0][1]]: item[1],
          [data[0][2]]: item[2],
        }))
        formatted.shift()
        setData(formatted)
      })
  }, [])

  useEffect(() => {
    if (data.length > 0) {
      if (!id) {
        newQuote()
      } else {
        setQuote(data[id])
      }
    }
  }, [data, router.asPath])

  const newQuote = () => {
    const q = data[randomFromRange(0, data.length)];
    setQuote(q);
    router.push(q.id)
  }

  return (
    <Wrapper>
      <div className={styles.container} style={{ backgroundColor: '#121212'}}>
        <Head>
          <title>Odiare Lavorare</title>
          <meta name="description" content="Pillole e testimonianze per ricordarci quanto faccia schifo lavorare" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <Quote
            color={'#121212'}
            quote={quote}
            modal={modal}
            setModal={setModal}
          />
        </main>
        <div className={styles.quoteNav}>
          <a href="#" onClick={(e) => {e.preventDefault(); setModal(true)}} className={styles.button}>
            <FontAwesomeIcon icon={faShareAlt} size="2x" color="white" />
          </a>
          <a href="#" onClick={(e) => {e.preventDefault(); newQuote()}} className={styles.button}>
            <FontAwesomeIcon icon={faSyncAlt} size="2x" color="white" />
          </a>
        </div>
      </div>
    </Wrapper>
  )
}