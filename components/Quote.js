import Head from 'next/head'
import Image from 'next/image'
import chroma from'chroma-js'
import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import html2canvas from 'html2canvas'
import styles from '../styles/Quote.module.css'
import RenderQuote from './RenderQuote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt, faShareAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'
import Button from './Button';


export default function Quote({ color, quote, modal, setModal, newQuote }) {
  const size = () => {
    if (!quote) {
      return null;
    }
    if (quote.text.length <= 100) {
      return styles.xxl;
    }
    if (quote.text.length <= 200) {
      return styles.xl
    }
    if (quote.text.length <= 400) {
      return styles.lg
    }
    if (quote.text.length <= 800) {
      return styles.md
    }
    if (quote.text.length <= 1000) {
      return styles.sm
    }
    return styles.xs
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.quote}>
        <h1 className={styles.title}>
          Odio il lavoro perché:
        </h1>
        <h2 className={`${styles.subtitle} ${size()}`}>
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
        <Button
          labelMobile
          label="Condividi"
          buttonProps={{
            onClick: () => setModal(true),
            style: { backgroundColor: "#FF5F5D", color: "white", marginBottom: '2rem', fontSize: '1.5rem', height: 60 },
          }}
          icon={faShareAlt}
          iconRight
          iconProps={{
            // size: '4x'
          }}
        />
        <Button
          labelMobile
          label="Prossima"
          buttonProps={{
            onClick: newQuote,
            style: { backgroundColor: "#FF5F5D", color: "white", fontSize: '1.5rem', height: 60 },
          }}
          icon={faArrowRight}
          iconRight
          iconProps={{
            // size: '4x'
          }}
        />
        {/* <a href="#" onClick={(e) => {e.preventDefault(); newQuote()}} className={styles.button}>
          <FontAwesomeIcon icon={faSyncAlt} size="4x" color="white" />
        </a>
        <a href="#" onClick={(e) => {e.preventDefault(); setModal(true)}} className={styles.button}>
          <FontAwesomeIcon icon={faShareAlt} size="4x" color="white" />
        </a> */}
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