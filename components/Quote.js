import Head from 'next/head'
import Image from 'next/image'
import chroma from'chroma-js'
import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import html2canvas from 'html2canvas'
import styles from '../styles/Quote.module.css'
import RenderQuote from './RenderQuote';

const colors = chroma.scale(['#fafa6e','#2A4858']).mode('lch').colors(10);
const getRandomColor = () => colors[Math.floor(Math.random() * 10)];

const randomFromRange = (min, max) => Math.floor(Math.random() * (max-min) +min);

export default function Quote({ onRefresh, color }) {
  // const [color, setColor] = useState(getRandomColor)
  const [quote,setQuote] = useState()
  const [data, setData] = useState([])
  const [modal, setModal] = useState()
  useEffect(() => {
    fetch('/entries.csv')
      .then((r) => r.text())
      .then((r) => {
        const { data } = Papa.parse(r)
        // console.log(p)
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
      newQuote()
    }
  }, [data])

  // const generateCanvas = () => {
  //   console.log(document.body)
  //   html2canvas(document.getElementById('quote')).then(function(canvas) {
  //     console.log(canvas.toDataURL())
  //     setImg(canvas.toDataURL())
  // });
  // }

  const newQuote = () => {
    setQuote(data[randomFromRange(0, data.length)]);
    onRefresh();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.quote}>
        <h1 className={styles.title}>
          Odio il lavoro perchè:
        </h1>
        <h2 className={styles.subtitle}>
          <mark>{quote && quote.text}</mark>
        </h2>
        <button onClick={newQuote}>New</button>
        <button onClick={() => setModal(true)}>Share</button>
        <RenderQuote
          color={color}
          quote={quote && quote.text}
          closeModal={() => setModal(false)}
          isOpen={modal}
          openModal={() => setModal(true)}
        />
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