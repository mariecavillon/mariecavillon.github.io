import React from 'react';

const content = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-J80HMF2KRG');";

const Ga = () => (
  <>
    <script async src='https://www.googletagmanager.com/gtag/js?id=G-J80HMF2KRG' />
    <script>{content}</script>
  </>
);

export default Ga;
