import styles from '../styles/Progetto.module.css';
import Wrapper from './Wrapper';

export default function PageLayout({ children }) {

  return (
    <Wrapper>
      <main className={styles.container}>
        {children}
      </main>
    </Wrapper>
  )
}