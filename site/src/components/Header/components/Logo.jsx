import React from 'react';
import { Link } from '@reach/router';

import { logo } from './styles.scss';

const Logo = () => (
  <Link to="/" className={logo}>Dessine.Moi.Un.Patchwork</Link>
);

export default Logo;
