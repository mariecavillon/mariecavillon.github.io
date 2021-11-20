import React, { useCallback, useState, useEffect } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import cn from 'classnames';

import allRoutes from '~routes';
import { Link, Icon } from '~atoms';
import { usePageNavigation, useGa } from '~hooks';
import tags from '~tags';

import { Logo } from './components';
import styles from './style.scss';

const routes = allRoutes.filter(r => r.title);

const Header = (props) => {
  const [active, setActive] = useState(false);
  const [currentPage] = usePageNavigation();
  const [gtag] = useGa();

  const toggle = useCallback(() => {
    setActive(!active);
  }, [active]);

  const hide = useCallback(() => {
    setActive(false);
  }, []);

  const sendGaEvent = useCallback((path) => {
    return () => {
      gtag && gtag('event', tags.routes[path]);
    }
  }, [gtag]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span className={styles.logo}>
          <Logo cb={sendGaEvent('/')}/>
        </span>
        <nav className={cn(styles.nav, { [styles[routes.length]]: active })}>
          <ul>
            {routes.map((route, i) => (
              <li className={cn(styles.navItem, { [styles.active]: route.path === currentPage })} key={`${route.path}${i}`} onClick={hide}>
                <Link to={route.path} cb={sendGaEvent(route.path)} noStyle>{route.title}</Link>
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
      </header>
    </div>
  );
};

export default Header;
