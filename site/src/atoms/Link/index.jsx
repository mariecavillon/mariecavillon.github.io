import React from 'react';
import { Link } from '@reach/router';
import cn from 'classnames';

import styles from './styles.scss';

export const CustomLink = ({ children, to, className, noStyle, cb, external }) => external ? (
  <a href={to} className={cn(!noStyle && styles.link, className)} onClick={cb} target="_blank">
    {children}
  </a>
) : (
  <Link to={to} className={cn(!noStyle && styles.link, className)} onClick={cb}>
    {children}
  </Link>
);

export default CustomLink;

