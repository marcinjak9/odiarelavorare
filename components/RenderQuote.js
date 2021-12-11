import Head from "next/head";
import Image from "next/image";
import chroma from "chroma-js";
import { useEffect, useState } from "react";
import Papa from "papaparse";
import html2canvas from "html2canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

import styles from "../styles/RenderQuote.module.css";
import Button from "./Button";

export default function RenderQuote({ quote, color, closeModal, isOpen }) {
  const [img, setImg] = useState();
  const [ready, setReady] = useState()

  const generateCanvas = () => {
    html2canvas(document.getElementById("quote")).then(function (canvas) {
      setImg(canvas.toDataURL());
    });
  };

  useEffect(() => {
    if (isOpen && quote && ready) {
      generateCanvas();
    }
  }, [isOpen, quote, ready]);
  // h = 550px
  // 100c f = 42px
  // 200c f = 21px
  // 400c = 10px
  // const q = "Vorrei svolgerlo senza sentir l'obbligo di mandare in pezzi la mia vita in caso di una pausa.";
  // const q2 = "Vorrei svolgerlo senza sentir l'obbligo di mandare in pezzi la mia vita in caso di una pausa.Vorrei svolgerlo senza sentir l'obbligo di mandare in pezzi la mia vita in caso di una pausa.";
  // const q3 = "Vorrei svolgerlo senza sentir l'obbligo di mandare in pezzi la mia vita in caso di una pausa.Vorrei svolgerlo senza sentir l'obbligo di mandare in pezzi la mia vita in caso di una pausa.Vorrei svolgerlo senza sentir l'obbligo di mandare in pezzi la mia vita in caso di una pausa.";

  const size = () => {
    if (!quote) {
      return null;
    }
    if (quote.length <= 100) {
      return styles.xxl
    }
    if (quote.length <= 200) {
      return styles.xl
    }
    if (quote.length <= 400) {
      return styles.lg
    }
    if (quote.length <= 800) {
      return styles.md
    }
    if (quote.length <= 1000) {
      return styles.sm
    }
    return styles.xs
  }

  // const fSize = 6000 / quote.length;
  return (
    <Modal
      isOpen={isOpen}
      // isOpen={true}
      onRequestClose={() => {closeModal(); setReady(false)}}
      contentLabel="Example Modal"
      className={styles.wrapper}
      shouldCloseOnOverlayClick
      ariaHideApp={false}
      onAfterOpen={() => setReady(true)}
      style={{
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.5)'
        }
      }}
    >
      {/* <div className={styles.wrapper} onClick={closeModal}> */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={styles.card}
          style={{ backgroundColor: color }}
          // id="quote"
        >
          <div>
            <p className={styles.title}>Odio il lavoro perché...</p>
            <p className={`${size()} ${styles.overflow}`}>{quote}</p>
          </div>
          <div>
            <p className={styles.branding}>odiarelavorare.it</p>
            <br />
            <div className={styles.buttonContainer}>
              <Button
                link
                label="Tweet"
                icon={faTwitter}
                buttonProps={{
                  "data-html2canvas-ignore": true,
                  target: "_self",
                  download: "odiare-il-lavoro.png",
                  href: img,
                  style: { color },
                }}
              />
              <Button
                link
                label="Instagram"
                icon={faInstagram}
                buttonProps={{
                  "data-html2canvas-ignore": true,
                  target: "_self",
                  download: "odiare-il-lavoro.png",
                  href: img,
                  style: { color },
                }}
              />
              <Button
                link
                label="FB"
                icon={faFacebook}
                buttonProps={{
                  "data-html2canvas-ignore": true,
                  target: "_self",
                  download: "odiare-il-lavoro.png",
                  href: img,
                  style: { color },
                }}
              />
              <Button
                link
                label="Salva"
                icon={faCopy}
                buttonProps={{
                  "data-html2canvas-ignore": true,
                  target: "_self",
                  download: "odiare-il-lavoro.png",
                  href: img,
                  style: { color },
                }}
              />
            </div>
          </div>
        </div>



        <div
          onClick={(e) => e.stopPropagation()}
          className={`${styles.card} ${styles.cardAbs}`}
          style={{ backgroundColor: color }}
          id="quote"
        >
          <div>
            <p className={styles.title}>Odio il lavoro perché...</p>
            <p className={size()}>{quote}</p>
          </div>
          <div>
            <p className={styles.branding}>odiarelavorare.it</p>
            <br />
            <div className={styles.buttonContainer}>
              <Button
                link
                label="Tweet"
                icon={faTwitter}
                buttonProps={{
                  "data-html2canvas-ignore": true,
                  target: "_self",
                  download: "odiare-il-lavoro.png",
                  href: img,
                  style: { color },
                }}
              />
              <Button
                link
                label="Instagram"
                icon={faInstagram}
                buttonProps={{
                  "data-html2canvas-ignore": true,
                  target: "_self",
                  download: "odiare-il-lavoro.png",
                  href: img,
                  style: { color },
                }}
              />
              <Button
                link
                label="FB"
                icon={faFacebook}
                buttonProps={{
                  "data-html2canvas-ignore": true,
                  target: "_self",
                  download: "odiare-il-lavoro.png",
                  href: img,
                  style: { color },
                }}
              />
              <Button
                link
                label="Salva"
                icon={faCopy}
                buttonProps={{
                  "data-html2canvas-ignore": true,
                  // target: "_self",
                  // download: "odiare-il-lavoro.png",
                  href: img,
                  style: { color },
                }}
              />
            </div>
          </div>
        </div>
      {/* </div> */}
    </Modal>
  );
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
