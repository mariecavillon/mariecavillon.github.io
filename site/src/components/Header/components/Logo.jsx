import React from 'react';
import { Link } from '@reach/router';

import { logo } from './styles.scss';

const Logo = () => (
  <Link to="/" className={logo}>Patchwork-s</Link>
);

export default Logo;
