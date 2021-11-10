import React from 'react';
import cn from 'classnames'

import styles from './styles.scss';

export const Quote = ({ className, children }) => (
  <p className={cn(styles.p, className)}><span className={styles.quote}>“</span>{children}</p>
);

export default Quote;

