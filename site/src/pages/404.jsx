import React from 'react'
import { Title, Button } from '~atoms';
import { homePage } from '~routes';

import styles from './styles.scss';

export default () => (
  <div className={styles.wrapper}>
    <Title>Oups, la page n'existe pas</Title>
    <Button to={homePage.path}>Revenir a l'accueil</Button>
  </div>
)
