import Head from 'next/head';
import Navigation from '../component/navigation/Navigation';
import About from '../component/about/About';

import styles from './home.module.scss';

export default function Home() {
  const flex = 'flex';
  return (
    <div className="container">
      <Head>
        <title>fael.tech | Experience for Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* TOOLBAR */}
      <Navigation />
      
      {/* MAIN */}
      <main className={styles.main}>
        {/* MAIN HERO */}
        <div className={[styles['main__hero']].join(' ')}>
          {/* HERO HEADER */}
          <div className={styles['hero__header']}>
            {/* <img src="/img/logo/main.png" alt="Fael.Tech logo." /> */}
            <h1 className={['text--display-3']}>Experiência para a Web</h1>
            <p style={{'maxWidth': '48rem'}}>
              Experimentos, conteúdos e projetos sobre experiência de
              usuário e desenvolvimento de softwares para a Web.
            </p>
          </div>
          {/* HERO ACTION */}
          <div className={styles['hero__action']}>
            <button>Conteúdo</button>
            <button>Projetos</button>
            <a href="#hello">Mais sobre mim</a>
          </div>
        </div>
        
        <About />
      </main>
    </div>
  );
}
