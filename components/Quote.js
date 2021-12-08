import Head from 'next/head'
import Image from 'next/image'
import chroma from'chroma-js'
import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import html2canvas from 'html2canvas'
import styles from '../styles/Quote.module.css'
import RenderQuote from './RenderQuote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'


const randomFromRange = (min, max) => Math.floor(Math.random() * (max-min) +min);

export default function Quote({ color }) {
  const router = useRouter()
  const { id } = router.query

  const [quote,setQuote] = useState()
  const [data, setData] = useState([])
  const [modal, setModal] = useState()
  const [spin, setSpin] = useState(false)
  
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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimeout(() => {
  //       const s = spin
  //       console.log(spin)
  //       setSpin((pstate) => !pstate)
  //     }, 1000)
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  const newQuote = () => {
    const q = data[randomFromRange(0, data.length)];
    setQuote(q);
    router.push(q.id)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.quote}>
        <h1 className={styles.title}>
          Odio il lavoro perché:
        </h1>
        <h2 className={styles.subtitle}>
          {quote && quote.text}
        </h2>
        <RenderQuote
          color={color}
          quote={quote && quote.text}
          closeModal={() => setModal(false)}
          isOpen={modal}
          openModal={() => setModal(true)}
        />
      </div>
      <div className={styles.buttons}>
        <a href="#" onClick={(e) => {e.preventDefault(); newQuote()}} className={styles.button}>
          <FontAwesomeIcon icon={faSyncAlt} spin={spin} size="4x" color="white" />
        </a>
        <a href="#" onClick={(e) => {e.preventDefault(); setModal(true)}} className={styles.button}>
          <FontAwesomeIcon icon={faShareAlt} spin={spin} size="4x" color="white" />
        </a>
        {/* <button onClick={newQuote}>New</button>
        <button onClick={() => setModal(true)}>Share</button> */}
      </div>
    </div>
  )
}

// export async function getStaticProps(context) {
//   return {
//     props: { c: getRandomColor() }, // will be passed to the page component as props
//   }
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       // String variant:
//       '/',
//       '/[id]',
//       // Object variant:
//       // { params: { id: false } },
//     ],
//     fallback: true,
//   }
// }