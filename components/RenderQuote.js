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

const colors = chroma.scale(["#fafa6e", "#2A4858"]).mode("lch").colors(10);
const getRandomColor = () => colors[Math.floor(Math.random() * 10)];

const randomFromRange = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

export default function RenderQuote({ quote, color, closeModal, isOpen }) {
  const [img, setImg] = useState();

  const generateCanvas = () => {
    console.log(document.body);
    html2canvas(document.getElementById("quote")).then(function (canvas) {
      setImg(canvas.toDataURL());
    });
  };

  useEffect(() => {
    generateCanvas();
  }, [quote]);

  return (
    <Modal
      isOpen={isOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      // style={customStyles}
      contentLabel="Example Modal"
      className={styles.wrapper}
      shouldCloseOnOverlayClick
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
          id="quote"
        >
          <div>
            <p className={styles.title}>Odio il lavoro perchè...</p>
            <p>{quote}</p>
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
