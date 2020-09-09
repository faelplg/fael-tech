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
      {/* TOOLBAR */}
      {/* <nav className={styles.nav}>
        TOOLBAR LEFT
        <div className={styles['toolbar__left']}>
          <img src="/img/logo/helmet_white.png" alt="Fael.Tech logo. An astronaut white helmet." />
        </div>
        TOOLBAR RIGHT
        <div className={styles['toolbar__right']}>
          <span className="text--menu">Conteúdo</span>
          <span className="text--menu">Projetos</span>
          <span className="text--menu">Biografia</span>
        </div>
      </nav> */}
      <div class="navigation">
        <input id="navi-toggle" type="checkbox" className="navigation__checkbox" />

        <label for="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>01</span>About Natours
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>02</span>Your benefits
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>03</span>Popular tours
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>04</span>Stories
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>05</span>Book now
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* MAIN */}
      <main className={styles.main}>
        {/* MAIN HERO */}
        <div className={[styles['main__hero']].join(' ')}>
          {/* HERO HEADER */}
          <div className={styles['hero__header']}>
            <img src="/img/logo/main.png" alt="Fael.Tech logo." />
            <h1 className={['text--headline']}>Experiência para a Web</h1>
            <p style={{'max-width': '48rem'}}>
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
        {/* MAIN CONTENT */}
        <div className={styles['main__content']}>
          <div className={utils['t-c']}>
            <img src="/img/avatar.png" alt="Fael avatar." />
          </div>
          <h2 id="hello" className={utils['t-c']}>
            Olá, eu sou Rafael Goulart, mas pode me chamar de Fael.
          </h2>
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
