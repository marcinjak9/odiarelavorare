import Head from 'next/head';
import styles from '../styles/Progetto.module.css';
import Wrapper from './Wrapper';

export default function PageLayout({ children, meta }) {

  return (
    <Wrapper>
      <Head>
        <title>{meta.title}</title>
        <meta
          name="description"
          content={meta.description}
        />
      </Head>
      <main className={styles.container}>
        {children}
      </main>
    </Wrapper>
  )
}