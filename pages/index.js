import Head from 'next/head';

import styles from './home.module.scss';
import utils from '../styles/utils.module.scss';

export default function Home() {
  const flex = 'flex';
  return (
    <div className="container">
      <Head>
        <title>fael.tech | Experience for Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={[styles['main__hero'], utils['enterFromRight']].join(' ')}>
          <div className={styles['hero__logo']}>
            <img src="/img/logo/main.png" alt="Fael.Tech logo." />
          </div>
          <div className={styles['hero__footer']}></div>
        </div>
        <div className={styles['main__content']}>
          <div className={utils['t-c']}>
            <img src="/img/avatar.png" alt="Fael avatar." />
          </div>
          <h2 className={utils['t-c']}>Olá, eu sou Rafael Goulart, mas pode me chamar de Fael.</h2>
          <h2 className={utils['t-c']}>Obrigado pela visita e seja muito bem-vinda/o!</h2>
          <br />
          <p className={utils['t-c']}>
            Sou Co-fundador e CTO da <a href="https://residuall.com">Residuall</a>. Atuo como
            Engenheiro UX e trabalho com Engenharia de Software há pouco mais de 10 anos. Um
            apaixonado com Web e tudo o que ela nos permite construir.
          </p>
          <br />
          <p className={utils['t-c']}>
            Conheça mais sobre mim e meu trabalho clicando no botão abaixo.
          </p>
          <br />
          <button className={utils['t-c']}>SOBRE O FAEL</button>
        </div>
      </main>
    </div>
  );
}
