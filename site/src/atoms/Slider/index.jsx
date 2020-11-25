import React from 'react';
import cn from 'classnames';

import styles from './styles.scss';

export const Slider = ({ children }) => (
  <div className={cn(styles.wrapper, styles[children.length])}>
    {children}
  </div>
);

Slider.Item = ({children, className}) => (
  <div className={cn(styles.item, className)}>
    {children}
  </div>
);

export default Slider
