import axios from 'axios'
import path from 'path'

import routes from './src/routes';

export default {
  siteRoot: 'https://patchwork-s.com',
  basePath: '',
  entry: path.join(__dirname, 'src', 'index.jsx'),
  getRoutes: async ({ dev }) => routes.reduce((a, r) => {
    return r.routes ? [...a, r, ...r.routes] : [...a, r];
  }, []),
  plugins: [
    [
      require.resolve('react-static-plugin-sass'),
      {
        cssLoaderOptions: {
          modules: true,
          sourceMap: true,
        },
      },
    ],
    require.resolve('react-static-plugin-css-modules'),
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
  devServer: {
    disableHostCheck: true,
    sockHost: 'marie.dev',
    sockPort: '443',
  },
}
