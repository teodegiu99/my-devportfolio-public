import React from 'react';
import styles from './footer.module.scss'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerStyle}>
      Copyright © <span className={styles.span}>Matteo De Giuseppe</span> {currentYear}
    </footer>
  );
};

export default Footer;
