import React, { useState, useEffect } from 'react';

import compass from '~images/compass.jpg';
import boat from '~images/boat.jpg';
import boatTop from '~images/boat-top.jpg';
import palm from '~images/palm.jpg';
import doorBlue from '~images/door-blue.jpg';
import doorGreen from '~images/door-green.jpg';
import desert from '~images/desert.jpg';
import blue from '~images/blue.jpg';
import flower from '~images/flower.jpg';
import knot from '~images/knot.jpg';
import lucky from '~images/lucky.jpg';
import ocean from '~images/ocean.jpg';
import parot from '~images/parot.jpg';
import patternGreen from '~images/pattern-green.jpg';
import patternGrey from '~images/pattern-grey.jpg';
import patternRoundGrey from '~images/pattern-round-grey.jpg';
import pencilHeads from '~images/pencil-heads.jpg';
import pencilRainbow from '~images/pencil-rainbow.jpg';
import tableCoffee from '~images/table-coffee.jpg';
import table from '~images/table.jpg';
import marie from '~images/marie-profile.jpg';

import styles from './styles.scss';

function debounce(fn, ms) {
  let timer;

  return () => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const LAYOUT_DESKTOP_BREAKPOINT = 760;

const Background = () => (
  <svg className={styles.image} viewBox="0 0 1770 1050" preserveAspectRatio="xMinYMin">
    <defs>
      <clipPath id="l1c1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,165,0)"/></clipPath>
      <clipPath id="l1c2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,525,0)"/></clipPath>
      <clipPath id="l1c3"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,885,0)"/></clipPath>
      <clipPath id="l1c4"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1245,0)"/></clipPath>
      <clipPath id="l1c5"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1605,0)"/></clipPath>
      <clipPath id="l2c1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,345,180)"/></clipPath>
      <clipPath id="l2c2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,705,180)"/></clipPath>
      <clipPath id="l2c3"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1065,180)"/></clipPath>
      <clipPath id="l2c4"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1425,180)"/></clipPath>
      <clipPath id="l3c1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,165,360)"/></clipPath>
      <clipPath id="l3c2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,525,360)"/></clipPath>
      <clipPath id="l3c3"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,885,360)"/></clipPath>
      <clipPath id="l3c4"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1245,360)"/></clipPath>
      <clipPath id="l3c5"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1605,360)"/></clipPath>
      <clipPath id="l4c1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,345,540)"/></clipPath>
      <clipPath id="l4c2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,705,540)"/></clipPath>
      <clipPath id="l4c3"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1065,540)"/></clipPath>
      <clipPath id="l4c4"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1425,540)"/></clipPath>
      <clipPath id="l5c1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,165,720)"/></clipPath>
      <clipPath id="l5c2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,525,720)"/></clipPath>
      <clipPath id="l5c3"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,885,720)"/></clipPath>
      <clipPath id="l5c4"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1245,720)"/></clipPath>
      <clipPath id="l5c5"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1605,720)"/></clipPath>
      <clipPath id="t1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,-15,-180)"/></clipPath>
      <clipPath id="t2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,345,-180)"/></clipPath>
      <clipPath id="t3"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,705,-180)"/></clipPath>
      <clipPath id="t4"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1065,-180)"/></clipPath>
      <clipPath id="t5"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1425,-180)"/></clipPath>
      <clipPath id="t6"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1785,-180)"/></clipPath>
      <clipPath id="r1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1785,180)"/></clipPath>
      <clipPath id="r2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1785,540)"/></clipPath>
      <clipPath id="b1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,-15,900)"/></clipPath>
      <clipPath id="b2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,345,900)"/></clipPath>
      <clipPath id="b3"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,705,900)"/></clipPath>
      <clipPath id="b4"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1065,900)"/></clipPath>
      <clipPath id="b5"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1425,900)"/></clipPath>
      <clipPath id="b6"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1785,900)"/></clipPath>
      <clipPath id="l1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,-15,180)"/></clipPath>
      <clipPath id="l2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,-15,540)"/></clipPath>
      <linearGradient id="gradYellow" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgb(255,255,131)" />
        <stop offset="100%" stopColor="rgb(243,243,119)" />
      </linearGradient>
      <linearGradient id="gradGreen" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="rgb(23,255,199)" />
        <stop offset="100%" stopColor="rgb(23,243,199)" />
      </linearGradient>
    </defs>
    <g clipPath="url(#l1c1)">
      <image height="400" width="400" x="0" y="0" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
    </g>
    <g clipPath="url(#l1c2)">
      <image height="400" width="400" x="360" y="0" preserveAspectRatio="xMinYMin slice" xlinkHref={compass}/>
    </g>
    <g clipPath="url(#l1c3)">
      <image height="400" width="400" x="720" y="0" preserveAspectRatio="xMinYMin slice" xlinkHref={boat}/>
    </g>
    <g clipPath="url(#l1c4)">
      <image height="400" width="400" x="1080" y="0" preserveAspectRatio="xMinYMin slice" xlinkHref={palm}/>
    </g>
    <g clipPath="url(#l1c5)">
      <image height="400" width="400" x="1440" y="0" preserveAspectRatio="xMinYMin slice" xlinkHref={desert}/>
    </g>
    <g clipPath="url(#l2c1)">
      <image height="400" width="400" x="165" y="165" preserveAspectRatio="xMinYMin slice" xlinkHref={pencilRainbow}/>
    </g>
    <g clipPath="url(#l2c2)">
      <image height="400" width="400" x="525" y="165" preserveAspectRatio="xMinYMin slice" xlinkHref={ocean}/>
    </g>
    <g clipPath="url(#l2c3)">
      <image height="400" width="400" x="885" y="165" preserveAspectRatio="xMinYMin slice" xlinkHref={patternGrey}/>
    </g>
    <g clipPath="url(#l2c4)">
      <image height="400" width="400" x="1245" y="165" preserveAspectRatio="xMinYMin slice" xlinkHref={parot}/>
    </g>
    <g clipPath="url(#l3c1)">
      <image height="400" width="400" x="0" y="330" preserveAspectRatio="xMinYMin slice" xlinkHref={table}/>
    </g>
    <g clipPath="url(#l3c2)">
      <image height="400" width="400" x="360" y="330" preserveAspectRatio="xMinYMin slice" xlinkHref={knot}/>
    </g>
    <g clipPath="url(#l3c3)">
      <image height="400" width="400" x="720" y="330" preserveAspectRatio="xMinYMin slice" xlinkHref={patternGreen}/>
    </g>
    <g clipPath="url(#l3c4)">
      <image height="400" width="400" x="1080" y="330" preserveAspectRatio="xMinYMin slice" xlinkHref={desert}/>
    </g>
    <g clipPath="url(#l3c5)">
      <image height="400" width="400" x="1440" y="330" preserveAspectRatio="xMinYMin slice" xlinkHref={ocean}/>
    </g>
    <g clipPath="url(#l4c1)">
      <image height="400" width="400" x="165" y="510" preserveAspectRatio="xMinYMin slice" xlinkHref={flower}/>
    </g>
    <g clipPath="url(#l4c2)">
      <image height="400" width="400" x="525" y="510" preserveAspectRatio="xMinYMin slice" xlinkHref={doorGreen}/>
    </g>
    <g clipPath="url(#l4c3)">
      <image height="400" width="400" x="885" y="510" preserveAspectRatio="xMinYMin slice" xlinkHref={blue}/>
    </g>
    <g clipPath="url(#l4c4)">
      <image height="400" width="400" x="1245" y="510" preserveAspectRatio="xMinYMin slice" xlinkHref={palm}/>
    </g>
    <g clipPath="url(#l5c1)">
      <image height="400" width="400" x="0" y="690" preserveAspectRatio="xMinYMin slice" xlinkHref={doorGreen}/>
    </g>
    <g clipPath="url(#l5c2)">
      <image height="400" width="400" x="360" y="690" preserveAspectRatio="xMinYMin slice" xlinkHref={boatTop}/>
    </g>
    <g clipPath="url(#l5c3)">
      <image height="400" width="400" x="720" y="690" preserveAspectRatio="xMinYMin slice" xlinkHref={tableCoffee}/>
    </g>
    <g clipPath="url(#l5c4)">
      <image height="400" width="400" x="1080" y="690" preserveAspectRatio="xMinYMin slice" xlinkHref={knot}/>
    </g>
    <g clipPath="url(#l5c5)">
      <image height="400" width="400" x="1440" y="690" preserveAspectRatio="xMinYMin slice" xlinkHref={flower}/>
    </g>
    <g clipPath="url(#b2)">
      <rect height="400" width="400" x="165" y="870" fill="url(#gradYellow)"/>
    </g>
    <g clipPath="url(#b3)">
      <rect height="400" width="400" x="525" y="870" fill="url(#gradGreen)"/>
    </g>
    <g clipPath="url(#b4)">
      <rect height="400" width="400" x="885" y="870" fill="url(#gradYellow)"/>
    </g>
    <g clipPath="url(#b5)">
      <rect height="400" width="400" x="1245" y="870" fill="url(#gradGreen)"/>
    </g>
  </svg>
);

const Left = () => (
  <svg className={styles.image} viewBox="0 0 1770 1050" preserveAspectRatio="xMinYMin">
    <defs>
      <clipPath id="l1c1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,165,0)"/></clipPath>
      <clipPath id="l1c2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,525,0)"/></clipPath>
      <clipPath id="l2c1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,345,180)"/></clipPath>
      <clipPath id="l3c1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,165,360)"/></clipPath>
      <clipPath id="l3c2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,525,360)"/></clipPath>
      <clipPath id="l4c1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,345,540)"/></clipPath>
      <clipPath id="l5c1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,165,720)"/></clipPath>
      <clipPath id="l5c2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,525,720)"/></clipPath>
      <clipPath id="t2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,345,-180)"/></clipPath>
    </defs>
    <g clipPath="url(#t2)">
      <image height="400" width="400" x="165" y="-165" preserveAspectRatio="xMinYMin slice" xlinkHref={blue}/>
    </g>
    <g clipPath="url(#l1c1)">
      <image height="400" width="400" x="0" y="0" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
    </g>
    <g clipPath="url(#l1c2)">
      <image height="400" width="400" x="360" y="0" preserveAspectRatio="xMinYMin slice" xlinkHref={compass}/>
    </g>
    <g clipPath="url(#l2c1)">
      <image height="400" width="400" x="165" y="165" preserveAspectRatio="xMinYMin slice" xlinkHref={palm}/>
    </g>
    <g clipPath="url(#l3c1)">
      <image height="400" width="400" x="0" y="330" preserveAspectRatio="xMinYMin slice" xlinkHref={table}/>
    </g>
    <g clipPath="url(#l3c2)">
      <image height="400" width="400" x="360" y="330" preserveAspectRatio="xMinYMin slice" xlinkHref={pencilRainbow}/>
    </g>
    <g clipPath="url(#l4c1)">
      <image height="400" width="400" x="165" y="510" preserveAspectRatio="xMinYMin slice" xlinkHref={boat}/>
    </g>
    <g clipPath="url(#l5c1)">
      <image height="400" width="400" x="0" y="690" preserveAspectRatio="xMinYMin slice" xlinkHref={doorBlue}/>
    </g>
    <g clipPath="url(#l5c2)">
      <image height="400" width="400" x="360" y="690" preserveAspectRatio="xMinYMin slice" xlinkHref={flower}/>
    </g>
  </svg>
);

const Right = () => (
  <svg className={styles.image} viewBox="0 0 1770 1050" preserveAspectRatio="xMinYMin">
    <defs>
      <clipPath id="l1c4"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1245,0)"/></clipPath>
      <clipPath id="l1c5"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1605,0)"/></clipPath>
      <clipPath id="l2c4"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1425,180)"/></clipPath>
      <clipPath id="l3c4"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1245,360)"/></clipPath>
      <clipPath id="l3c5"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1605,360)"/></clipPath>
      <clipPath id="l4c4"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1425,540)"/></clipPath>
      <clipPath id="l5c4"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1245,720)"/></clipPath>
      <clipPath id="l5c5"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1605,720)"/></clipPath>
      <clipPath id="t5"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1425,-180)"/></clipPath>
    </defs>
    <g clipPath="url(#l1c4)">
      <image height="400" width="400" x="1080" y="0" preserveAspectRatio="xMinYMin slice" xlinkHref={palm}/>
    </g>
    <g clipPath="url(#l1c5)">
      <image height="400" width="400" x="1440" y="0" preserveAspectRatio="xMinYMin slice" xlinkHref={ocean}/>
    </g>
    <g clipPath="url(#l2c4)">
      <image height="400" width="400" x="1245" y="165" preserveAspectRatio="xMinYMin slice" xlinkHref={table}/>
    </g>
    <g clipPath="url(#l3c4)">
      <image height="400" width="400" x="1080" y="330" preserveAspectRatio="xMinYMin slice" xlinkHref={knot}/>
    </g>
    <g clipPath="url(#l3c5)">
      <image height="400" width="400" x="1440" y="330" preserveAspectRatio="xMinYMin slice" xlinkHref={doorGreen}/>
    </g>
    <g clipPath="url(#l4c4)">
      <image height="400" width="400" x="1245" y="510" preserveAspectRatio="xMinYMin slice" xlinkHref={tableCoffee}/>
    </g>
    <g clipPath="url(#l5c4)">
      <image height="400" width="400" x="1080" y="690" preserveAspectRatio="xMinYMin slice" xlinkHref={patternRoundGrey}/>
    </g>
    <g clipPath="url(#l5c5)">
      <image height="400" width="400" x="1440" y="690" preserveAspectRatio="xMinYMin slice" xlinkHref={parot}/>
    </g>
    <g clipPath="url(#t5)">
      <image height="400" width="400" x="1245" y="-165" preserveAspectRatio="xMinYMin slice" xlinkHref={blue}/>
    </g>
  </svg>
);

const Top = () => (
  <svg className={styles.image} viewBox="0 0 1770 1050" preserveAspectRatio="xMinYMin">
    <defs>
      <clipPath id="t1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,-15,-180)"/></clipPath>
      <clipPath id="t2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,345,-180)"/></clipPath>
      <clipPath id="t3"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,705,-180)"/></clipPath>
      <clipPath id="t4"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1065,-180)"/></clipPath>
      <clipPath id="t5"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1425,-180)"/></clipPath>
      <clipPath id="t6"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1785,-180)"/></clipPath>
    </defs>
    <g clipPath="url(#t1)">
      <image height="400" width="400" x="-180" y="-180" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
    </g>
    <g clipPath="url(#t2)">
      <image height="400" width="400" x="180" y="-180" preserveAspectRatio="xMinYMin slice" xlinkHref={compass}/>
    </g>
    <g clipPath="url(#t3)">
      <image height="400" width="400" x="540" y="-180" preserveAspectRatio="xMinYMin slice" xlinkHref={boat}/>
    </g>
    <g clipPath="url(#t4)">
      <image height="400" width="400" x="900" y="-180" preserveAspectRatio="xMinYMin slice" xlinkHref={palm}/>
    </g>
    <g clipPath="url(#t5)">
      <image height="400" width="400" x="1260" y="-180" preserveAspectRatio="xMinYMin slice" xlinkHref={desert}/>
    </g>
    <g clipPath="url(#t6)">
      <image height="400" width="400" x="1620" y="-180" preserveAspectRatio="xMinYMin slice" xlinkHref={pencilRainbow}/>
    </g>
  </svg>
);

export const BgImage = ({ className }) => (
  <div className={className}>
    <Background/>
  </div>
);

export const BgLeft = ({ className, mini }) => {
  const browserWindow = typeof window !== 'undefined' ? window : false;
  const [ww, setww] = useState(browserWindow ? browserWindow.innerWidth : null);

  useEffect(() => {
    const handleResize = debounce(() => {
      setww(browserWindow.innerWidth);
    }, 200);

    browserWindow.addEventListener('resize', handleResize);

    return () => {
      browserWindow.removeEventListener('resize', handleResize);
    };
  });
  
  return (
    <div className={className}>
      {ww < LAYOUT_DESKTOP_BREAKPOINT ?  mini ? (<Top />) : (<Background />) : (<Left />)}
    </div>
  );
};

export const BgRight = ({ className, mini }) => {
  const browserWindow = typeof window !== 'undefined' ? window : false;
  const [ww, setww] = useState(browserWindow ? browserWindow.innerWidth : null);

  useEffect(() => {
    const handleResize = debounce(() => {
      setww(browserWindow.innerWidth);
    }, 200);

    browserWindow.addEventListener('resize', handleResize);

    return () => {
      browserWindow.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className={className}>
      {ww < LAYOUT_DESKTOP_BREAKPOINT ? mini ? (<Top />) : (<Background />) : (<Right />)}
    </div>
  );
};

export const BgTop = ({ className }) => (
  <div className={className}>
    <Top />
  </div>
);

export const BgTest = ({ className }) => (
  <div className={className}>
    <svg className={styles.image} viewBox="0 0 1770 1050" preserveAspectRatio="xMinYMin">
      <defs>
        <clipPath id="l1c1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,165,0)"/></clipPath>
        <clipPath id="l1c2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,525,0)"/></clipPath>
        <clipPath id="l1c3"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,885,0)"/></clipPath>
        <clipPath id="l1c4"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1245,0)"/></clipPath>
        <clipPath id="l1c5"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1605,0)"/></clipPath>
        <clipPath id="l2c1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,345,180)"/></clipPath>
        <clipPath id="l2c2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,705,180)"/></clipPath>
        <clipPath id="l2c3"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1065,180)"/></clipPath>
        <clipPath id="l2c4"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1425,180)"/></clipPath>
        <clipPath id="l3c1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,165,360)"/></clipPath>
        <clipPath id="l3c2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,525,360)"/></clipPath>
        <clipPath id="l3c3"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,885,360)"/></clipPath>
        <clipPath id="l3c4"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1245,360)"/></clipPath>
        <clipPath id="l3c5"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1605,360)"/></clipPath>
        <clipPath id="l4c1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,345,540)"/></clipPath>
        <clipPath id="l4c2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,705,540)"/></clipPath>
        <clipPath id="l4c3"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1065,540)"/></clipPath>
        <clipPath id="l4c4"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1425,540)"/></clipPath>
        <clipPath id="l5c1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,165,720)"/></clipPath>
        <clipPath id="l5c2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,525,720)"/></clipPath>
        <clipPath id="l5c3"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,885,720)"/></clipPath>
        <clipPath id="l5c4"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1245,720)"/></clipPath>
        <clipPath id="l5c5"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1605,720)"/></clipPath>
        <clipPath id="t1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,-15,-180)"/></clipPath>
        <clipPath id="t2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,345,-180)"/></clipPath>
        <clipPath id="t3"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,705,-180)"/></clipPath>
        <clipPath id="t4"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1065,-180)"/></clipPath>
        <clipPath id="t5"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1425,-180)"/></clipPath>
        <clipPath id="t6"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1785,-180)"/></clipPath>
        <clipPath id="r1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1785,180)"/></clipPath>
        <clipPath id="r2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1785,540)"/></clipPath>
        <clipPath id="b1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,-15,900)"/></clipPath>
        <clipPath id="b2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,345,900)"/></clipPath>
        <clipPath id="b3"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,705,900)"/></clipPath>
        <clipPath id="b4"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1065,900)"/></clipPath>
        <clipPath id="b5"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1425,900)"/></clipPath>
        <clipPath id="b6"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,1785,900)"/></clipPath>
        <clipPath id="l1"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,-15,180)"/></clipPath>
        <clipPath id="l2"><rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,-15,540)"/></clipPath>
      </defs>
      <g clipPath="url(#l1c1)" className={styles.diamond} style={{transformOrigin: "165px 0px", animationDelay: "0s"}}>
        <image height="400" width="400" x="0" y="0" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l1c2)" className={styles.diamond} style={{transformOrigin: "525px 0px", animationDelay: ".1s"}}>
        <image height="400" width="400" x="360" y="0" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l1c3)" className={styles.diamond} style={{transformOrigin: "885px 0px", animationDelay: ".2s"}}>
        <image height="400" width="400" x="720" y="0" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l1c4)" className={styles.diamond} style={{transformOrigin: "1245px 0px", animationDelay: ".3s"}}>
        <image height="400" width="400" x="1080" y="0" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l1c5)" className={styles.diamond} style={{transformOrigin: "1605px 0px", animationDelay: ".4s"}}>
        <image height="400" width="400" x="1440" y="0" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l2c1)" className={styles.diamond} style={{transformOrigin: "345px 180px", animationDelay: ".1s"}}>
        <image height="400" width="400" x="165" y="165" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l2c2)" className={styles.diamond} style={{transformOrigin: "705px 180px", animationDelay: ".2s"}}>
        <image height="400" width="400" x="525" y="165" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l2c3)" className={styles.diamond} style={{transformOrigin: "1065px 180px", animationDelay: ".3s"}}>
        <image height="400" width="400" x="885" y="165" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l2c4)" className={styles.diamond} style={{transformOrigin: "1425px 180px", animationDelay: ".4s"}}>
        <image height="400" width="400" x="1245" y="165" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l3c1)" className={styles.diamond} style={{transformOrigin: "165px 360px", animationDelay: ".2s"}}>
        <image height="400" width="400" x="0" y="330" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l3c2)" className={styles.diamond} style={{transformOrigin: "525px 360px", animationDelay: ".3s"}}>
        <image height="400" width="400" x="360" y="330" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l3c3)" className={styles.diamond} style={{transformOrigin: "885px 360px", animationDelay: ".4s"}}>
        <image height="400" width="400" x="720" y="330" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l3c4)" className={styles.diamond} style={{transformOrigin: "1245px 360px", animationDelay: ".5s"}}>
        <image height="400" width="400" x="1080" y="330" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l3c5)" className={styles.diamond} style={{transformOrigin: "1605px 360px", animationDelay: ".6s"}}>
        <image height="400" width="400" x="1440" y="330" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l4c1)" className={styles.diamond} style={{transformOrigin: "345px 540px", animationDelay: ".3s"}}>
        <image height="400" width="400" x="165" y="510" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l4c2)" className={styles.diamond} style={{transformOrigin: "705px 540px", animationDelay: ".4s"}}>
        <image height="400" width="400" x="525" y="510" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l4c3)" className={styles.diamond} style={{transformOrigin: "1065px 540px", animationDelay: ".5s"}}>
        <image height="400" width="400" x="885" y="510" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l4c4)" className={styles.diamond} style={{transformOrigin: "1425px 540px", animationDelay: ".6s"}}>
        <image height="400" width="400" x="1245" y="510" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l5c1)" className={styles.diamond} style={{transformOrigin: "165px 720px", animationDelay: ".4s"}}>
        <image height="400" width="400" x="0" y="690" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l5c2)" className={styles.diamond} style={{transformOrigin: "525px 720px", animationDelay: ".5s"}}>
        <image height="400" width="400" x="360" y="690" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l5c3)" className={styles.diamond} style={{transformOrigin: "885px 720px", animationDelay: ".6s"}}>
        <image height="400" width="400" x="720" y="690" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l5c4)" className={styles.diamond} style={{transformOrigin: "1245px 720px", animationDelay: ".7s"}}>
        <image height="400" width="400" x="1080" y="690" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
      <g clipPath="url(#l5c5)" className={styles.diamond} style={{transformOrigin: "1605px 720px", animationDelay: ".8s"}}>
        <image height="400" width="400" x="1440" y="690" preserveAspectRatio="xMinYMin slice" xlinkHref={lucky}/>
      </g>
    </svg>
  </div>
);

export const BgMarie = ({ className }) => {
  const browserWindow = typeof window !== 'undefined' ? window : false;
  const [ww, setww] = useState(browserWindow ? browserWindow.innerWidth : null);

  useEffect(() => {
    const handleResize = debounce(() => {
      setww(browserWindow.innerWidth);
    }, 200);

    browserWindow.addEventListener('resize', handleResize);

    return () => {
      browserWindow.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className={className}>
      {ww < LAYOUT_DESKTOP_BREAKPOINT ? (
        <svg className={styles.image} viewBox="0 0 768 1152" preserveAspectRatio="xMinYMin">
          <defs>
            <clipPath id="mask">
              <rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,165,0)"/>
              <rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,525,0)"/>
              <rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,345,180)"/>
              <rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,705,180)"/>
              <rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,165,360)"/>
              <rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,525,360)"/>
              <rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,-15,180)"/>
            </clipPath>
          </defs>
          <g clipPath="url(#mask)">
            <image height="1152" width="768" x="0" y="0" preserveAspectRatio="xMinYMin slice" xlinkHref={marie}/>
          </g>
        </svg>
      ) : (
        <svg className={styles.image} viewBox="0 0 1770 1050" preserveAspectRatio="xMinYMin">
          <defs>
            <clipPath id="mask">
              <rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,165,0)"/>
              <rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,525,0)"/>
              <rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,345,180)"/>
              <rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,165,360)"/>
              <rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,525,360)"/>
              <rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,345,540)"/>
              <rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,165,720)"/>
              <rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,525,720)"/>
              <rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,345,-180)"/>
              <rect x="0" y="0" width="233.4" height="233.4" transform="matrix(0.707,0.707,-0.707,0.707,345,900)"/>
            </clipPath>
          </defs>
          <g clipPath="url(#mask)">
            <image height="1152" width="768" x="-30" y="0" preserveAspectRatio="xMinYMin slice" xlinkHref={marie}/>
          </g>
        </svg>
      )}
    </div>
  );
};
