import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  const router = useRouter();
  const linkCLass = (href) => {
  if (href === router.pathname) {
    return "active";
  }
  return "";
  };
  return (
    <div className={styles.wrapper}>
      <div>
        <Link href="/">
          <a className={styles.brand}>
            <h3>odiarelavorare.it</h3>
          </a>
        </Link>
      </div>
      <div className={styles.navItems}>
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
