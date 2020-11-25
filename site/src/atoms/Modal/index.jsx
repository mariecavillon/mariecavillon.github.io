import React, { useEffect, useState, useContext } from 'react';
import cn from 'classnames';

import styles from './styles.scss';

const Context = React.createContext();

export const Modal = ({ children }) => {
  const [context, setContext] = useState({ on: false, open, close });
  const open = () => setContext((e) => ({ ...e, on: true }));
  const close = () => setContext((e) => ({ ...e, on: false }));

  useEffect(() => {
    setContext((e) => ({ ...e, open, close }));
  }, []);

  useEffect(() => {
    if (!document) {
      return;
    }

    if (context.on) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [context.on]);

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};

Modal.Content = ({ children }) => {
  const context = useContext(Context);
  const stopPropagation = (e) => {
    e.stopPropagation();
    return null;
  };

  return context.on ? (<div className={styles.modal} onClick={context.close}><div onClick={stopPropagation} className={styles.content}>{children}</div></div>) : null;
};

Modal.Consumer = Context.Consumer;

export default Modal;
