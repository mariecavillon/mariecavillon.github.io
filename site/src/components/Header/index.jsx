import React, { useCallback, useState, useEffect } from 'react';
import { faBars, faTimes, faGlobe } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

import allRoutes, { homePage, comingSoon } from '~routes';
import { Link, Icon } from '~atoms';
import { usePageNavigation, useGa } from '~hooks';
import gaTags from '~tags';

import { Logo } from './components';
import styles from './style.scss';

const routes = allRoutes.filter(r => r.title);

const Header = (props) => {
  const [active, setActive] = useState(false);
  const [currentPage] = usePageNavigation();
  const [_, sendEvent] = useGa();

  const toggle = useCallback(() => {
    setActive(!active);
  }, [active]);

  const hide = useCallback(() => {
    setActive(false);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.logo}>
          <Logo cb={sendEvent(...gaTags.menu['/'])}/>
        </span>
        <nav className={cn(styles.nav, { [styles[`nav${routes.length}`]]: active })}>
          <ul>
            {routes.map((route, i) => (
              <li className={cn(styles.navItem, { [styles.active]: route.path === currentPage })} key={`${route.path}${i}`} onClick={hide}>
                <Link to={route.path} cb={sendEvent(...gaTags.menu[route.path])} noStyle>{route.title}</Link>
                {route.routes && (
                  <ul className={cn(styles.subnav, { [styles[`subnav${route.routes.length}`]]: true })}>
                    {route.routes.map((subroute, j) => (
                      <li className={styles.subnavItem} key={`${subroute.path}${j}`}>
                        <Link to={subroute.path} noStyle>{subroute.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <span className={styles.menuIcon} onClick={toggle}>
          <Icon icon={active ? faTimes : faBars} />
        </span>
        <span className={styles.langMenu}>
          <Icon icon={faGlobe} />
          <span className={styles.langNav}>
            <Link to={homePage.path} className={styles.lang}>FR</Link>
            <Link to={comingSoon.path} className={styles.lang}>EN</Link>
          </span>
        </span>
      </header>
    </div>
  );
};

export default Header;
