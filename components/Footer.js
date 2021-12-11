import Image from 'next/image';
import logo from './images/logo.png'
import styles from '../styles/Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.lWrapper}>
        <Link href="/progetto">
          Il Progetto
        </Link>
        <Link href="/resources">
          Risorse
        </Link>
        <Link href="/sostienici">
          Sostienici
        </Link>
        <Link href="/speakup">
          Testimonia
        </Link>
      </div>
      <div>
        <Link href="mailto:mail@odiarelavorare.it">
          mail@odiarelavorare.it
        </Link>
      </div>
    </div>
    <div className={`${styles.wrapper} ${styles.wrapperSmall}`}>
      <div>
        <Link href="/progetto">
          Privacy policy
        </Link>
        <Link href="/dev-manifesto">
          Dev manifesto
        </Link>
      </div>
      <div>
        <p className={styles.small}>Proudly 🍪 cookieless website</p>
      </div>
    </div>
    </>
  )
}