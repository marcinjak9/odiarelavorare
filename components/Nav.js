import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '../styles/Nav.module.css'
import styles from "../styles/Nav.module.css";
import { useState } from "react";

export default function Nav() {
  const [menu, setMenu] = useState(false)
  const router = useRouter();
  const linkCLass = (href) => {
  if (href === router.pathname) {
    return "active";
  }
  return "";
  };

  const toggleMenu = () => {
    setMenu((m) => !m)
  }
  return (
    <div className={styles.wrapper}>
      <div>
        <Link href="/">
          <a className={styles.brand}>
            <h3>odiarelavorare.it</h3>
          </a>
        </Link>
      </div>
      <div className={styles.navMobile}>
        <a href="#" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} color="white" size="lg" />
        </a>
      </div>
      <div className={`${styles.navItems} ${menu ? styles.navItemsOpen : ''}`}>
        <Link href="/progetto">
          <a className={linkCLass("/progetto")}>Il Progetto</a>
        </Link>
        <Link href="/resources" className={linkCLass("/resources")}>
          <a className={linkCLass("/resources")}>Risorse</a>
        </Link>
        <Link href="/sostienici" className={linkCLass("/sostienici")}>
          <a className={linkCLass("/sostienici")}>Sostienici ☕️</a>
        </Link>
        <Link href="/speakup" className={linkCLass("/speakup")}>
          <a className={linkCLass("/speakup")}>Speak Up</a>
        </Link>
      </div>
    </div>
  );
}
