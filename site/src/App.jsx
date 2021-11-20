import React, { Suspense, useState, useEffect } from 'react'
import { Head, Root, Routes } from 'react-static'
import { Router } from '@reach/router'
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';

import { Header, Footer } from '~components';
import { Button } from '~atoms';

import './main.scss';
import styles from './consent.scss';

const GaContent = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-J80HMF2KRG');";

function App() {
  const [cookieConsent, setCookieConsent] = useState(getCookieConsentValue());

  const cookieConsentCb = () => {
    setCookieConsent(true);
  };

  return (
    <Root>
      <Head>
        <meta charSet="utf-8" />
        <title>Patchworks</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/ > 
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        {cookieConsent && (<script async src='https://www.googletagmanager.com/gtag/js?id=G-J80HMF2KRG' />)}
        {cookieConsent && (<script>{GaContent}</script>)}
      </Head>
      <Suspense fallback={<div />}>
        <Header />
        <Router>
          <Routes path="*" />
        </Router>
        <Footer />
        <CookieConsent containerClasses={styles.banner} ButtonComponent={Button} onAccept={cookieConsentCb} buttonText="Autoriser et fermer">En cliquant sur "Autoriser et fermer", vous acceptez l’utilisation de cookies par Patchwork-s afin (i) d’optimiser votre expérience de navigation et (ii) de mesurer et d’analyser la performance de la Plateforme. Vous pouvez également refuser tout cookie non essentiel au fonctionnement de la Plateforme, en poursuivant votre navigation.</CookieConsent>
      </Suspense>
    </Root>
  )
}

export default App
