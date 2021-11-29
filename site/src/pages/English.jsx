import React from 'react'
import { faTools } from '@fortawesome/free-solid-svg-icons';

import { Title, Button, Icon } from '~atoms';

import styles from './styles.scss';

export default () => (
  <div className={styles.wrapper}>
    <Icon icon={faTools} className={styles.comingSoonIcon} />
    <Title>English version coming soon!</Title>
  </div>
)

