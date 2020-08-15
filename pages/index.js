import Head from 'next/head'

import styles from './home.module.scss';

export default function Home() {
  const flex = 'flex';
  return (
    <div className={styles['container']}>
      <Head>
        <title>fael.tech | Experience for Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles['main']}>
        <div className={[styles['main__hero'], 'enterFromLeft'].join(' ')}>
          <div className={styles['hero__logo']}>
            <img src="/img/logo/main.png" alt="Fael.Tech logo."/>
          </div>
          <div className={styles['hero__footer']}>
          </div>
        </div>
        <div className={styles['main__content']}></div>
      </main>
    </div>
  )
}
