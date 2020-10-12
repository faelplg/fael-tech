import React from 'react';
import styles from './navigation.module.scss';

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <input id="navi-toggle" type="checkbox" className={styles.navigation__checkbox} />

      <label htmlFor="navi-toggle" className={styles.navigation__button}>
        <span className={styles.navigation__icon}>&nbsp;</span>
      </label>

      <div className={styles.navigation__background}>&nbsp;</div>

      <nav className={styles.navigation__nav}>
        <ul className={styles.navigation__list}>
          <li className={styles.navigation__item}>
            <a href="#" className={styles.navigation__link}>
              <span>01</span>About Natours
            </a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#" className={styles.navigation__link}>
              <span>02</span>Your benefits
            </a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#" className={styles.navigation__link}>
              <span>03</span>Popular tours
            </a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#" className={styles.navigation__link}>
              <span>04</span>Stories
            </a>
          </li>
          <li className={styles.navigation__item}>
            <a href="#" className={styles.navigation__link}>
              <span>05</span>Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
