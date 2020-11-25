import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Icon } from '~atoms';

import styles from './styles.scss';

export const More = () => (
  <span className={styles.more}><Icon icon={faPlus} /></span>
);

export default More;
