import React from 'react';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

import { Icon } from '~atoms';

import styles from './styles.scss';

export const Less = () => (
  <span className={styles.less}><Icon icon={faMinus} /></span>
);

export default Less;

