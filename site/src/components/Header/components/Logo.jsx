import React from 'react';
import { Link } from '@reach/router';

import { logo } from './styles.scss';

const Logo = ({cb}) => (
  <Link to="/" className={logo} onClick={cb}>Patchwork-s</Link>
);

export default Logo;
