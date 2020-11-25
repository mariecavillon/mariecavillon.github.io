import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import ReactGA from 'react-ga';

import App from './App'

export default App

const GA = {
  id: 'UA-31756540-1',
  options: {
  },
};

if (typeof document !== 'undefined') {
  const target = document.getElementById('root');

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render

  const render = (Comp) => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      target
    )
  }

  ReactGA.initialize(GA.id, GA.options);
  render(App);

  if (module && module.hot) {
    module.hot.accept('./App', () => {
      render(App)
    })
  }
}
