import React from 'react';
import cn from 'classnames';

import { BgImage, BgRight, BgLeft, BgTop, BgMarie } from '~atoms';

import styles from './styles.scss';

export const Section = ({ children, bg, margin, bgLeft, bgRight, bgTop, className, noTopMargin, home, marie, mini }) => (
  <section className={cn(styles.section, className, {[styles.wrapper]: bg || bgRight || bgLeft || bgTop || marie, [styles.marginBottom]: bgRight || bgTop || bgLeft || marie })}>
    {bgTop ? (<BgTop className={cn(styles.bg, styles.top)} />) : bgRight ? (<BgRight className={cn(styles.bg, styles.right)} mini={mini} />) : bgLeft ? (<BgLeft className={cn(styles.bg, styles.left)} mini={mini} />) : marie ? <BgMarie className={cn(styles.bg, styles.left, styles.marie)} /> : bg ? (<BgImage className={cn(styles.bg, { [styles.home]: home })} />) : null}
    <div className={cn(styles.content, {[styles.margin]: margin, [styles.sides]: bgTop || bgRight || bgLeft, [styles.noTopMargin]: noTopMargin })}>
      {children}
    </div>
  </section>
);

export default Section;
