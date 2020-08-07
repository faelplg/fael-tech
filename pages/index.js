import Head from 'next/head'

import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles['container']}>
      <Head>
        <title>fael.tech | Experience for Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles['main']}>
        <div className={styles['main__hero']}>Hero</div>
        <div className={styles['main__content']}>Content</div>
      </main>
    </div>
  )
}
