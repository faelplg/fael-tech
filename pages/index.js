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
        <div className={styles['main__content']}>
          <h2>Olá, sou Rafael Goulart (a.k.a Fael) e obrigado pela visita!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae nam exercitationem itaque maxime, dolorum sunt esse voluptatibus ex tenetur laboriosam eligendi, doloribus officiis error alias corrupti iure molestiae, impedit ratione!
          </p>
        </div>
      </main>
    </div>
  )
}
