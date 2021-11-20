import {homePage, contactPage, servicePage, aboutPage} from './routes';

export const tags = {
  routes: {
    [homePage.path]: 'Click_HP_Menu',
    [servicePage.path]: 'Click_MesServices_Menu',
    [aboutPage.path]: 'Click_UnPeuDeMoi_Menu',
    [contactPage.path]: 'Click_OnSAppelle_Menu',
  }
};

export default tags;
