import React, { Suspense } from 'react'
import { Head, Root, Routes } from 'react-static'
import { Router } from '@reach/router'

import { Header, Footer } from '~components';

import './main.scss';

function App() {
  return (
    <Root>
      <Head>
        <meta charSet="utf-8" />
        <title>marie</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/ > 
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <Suspense fallback={<div />}>
        <Header />
        <Router>
          <Routes path="*" />
        </Router>
        <Footer />
      </Suspense>
    </Root>
  )
}

export default App
