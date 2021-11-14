export const contactPage = {
  path: '/contact',
  template: 'src/pages/Contact',
  title: 'On s\'appelle ?',
};

export const aboutPage = {
  path: '/about',
  template: 'src/pages/About',
  title: 'Un peu de moi',
};

export const servicePage = {
  path: '/services',
  template: 'src/pages/Service',
  title: 'Mes services',
};

export const homePage = {
  path: '/',
  template: 'src/pages/Home',
};

export const routes = [
  homePage,
  servicePage,
  aboutPage,
  contactPage,
  {
    path: '404',
    template: 'src/pages/404',
  },
];

export default routes;
