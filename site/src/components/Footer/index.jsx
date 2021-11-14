import React from 'react';

import { footer } from './styles.scss';

export const Footer = () => (
  <footer className={footer}>
    <ul>
      <li>© Patchwork-s - {new Date().getFullYear()}</li>
    </ul>
  </footer>
);

export default Footer;
