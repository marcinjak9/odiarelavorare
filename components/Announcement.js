import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../styles/Nav.module.css'
import styles from "../styles/Announcement.module.css";
import { useEffect, useState } from "react";

const ANNOUNCEMENT_BAR = 'announcementClosed@0.0.3'

export default function Announcement() {
  const [barOpen, setBarOpen] = useState(false);

  
  useEffect(() => {
    const o = localStorage.getItem(ANNOUNCEMENT_BAR)
    if (!o) {
      setBarOpen(true)
    }
  }, [])

  console.log(barOpen)

  const closeBar = (e) => {
    e.preventDefault();
    setBarOpen(false)
    localStorage.setItem(ANNOUNCEMENT_BAR, true)
  }

  if (!barOpen) {
    return null
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.text}>
      📣 odiarelavorare.it parteciperà allo
        {' '}
        <Link href="/">
          <a className={styles.brand}>
            sciopero generale del 16 Dicembre 2021
          </a>
        </Link>
        {' '}📣
      </div>
      <a href="#" onClick={closeBar}>
        <FontAwesomeIcon icon={faTimes} color="#fff" />
      </a>
    </div>
  );
}
