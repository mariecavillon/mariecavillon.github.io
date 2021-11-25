import {homePage, contactPage, servicePage, aboutPage} from './routes';

export const tags = {
  menu: {
    [homePage.path]: [
      'Click_HP_Menu',
      { eventCategory: 'Vision', eventLabel: 'Menu', eventAction: 'click'},
    ],
    [servicePage.path]: [
      'Click_MesServices_Menu',
      { eventCategory: 'Offre', eventLabel: 'Menu', eventAction: 'click'},
    ],
    [aboutPage.path]: [
      'Click_UnPeuDeMoi_Menu',
      { eventCategory: 'Coach', eventLabel: 'Menu', eventAction: 'click'},
    ],
    [contactPage.path]: [
      'Click_OnSAppelle_Menu',
      { eventCategory: 'ContactInfo', eventLabel: 'Menu', eventAction: 'click'},
    ],
  },
  home: {
    button: {
      service: [
        'Click_MesServices_HP',
        { eventCategory: 'Offre', eventLabel: 'BannerHP', eventAction: 'click'},
      ],
      about: [
        'Click_UnPeuDeMoi_HP',
        { eventCategory: 'Coach', eventLabel: 'BannerHP', eventAction: 'click'},
      ],
      contact: [
        'Click_ContactezMoi_HP',
        { eventCategory: 'ContactInfo', eventLabel: 'BannerHP', eventAction: 'click'},
      ],
    },
  },
  service: {
    button: {
      modal: {
        explorateur: {
          description: [
            'Click_DescrExplo_MesServices',
            { eventCategory: 'OffreExplorateurs', eventLabel: 'DescrExplo_MesServices', eventAction: 'click'},
          ],
          theme: [
            'Click_ThemExplo_MesServices',
            { eventCategory: 'OffreExplorateurs', eventLabel: 'ThemExplo_MesServices', eventAction: 'click'},
          ],
          contact: [
            'Click_ContactezMoiExplo_MesServices',
            { eventCategory: 'ContactInfo', eventLabel: 'ThemExplo_MesServices', eventAction: 'click'},
          ],
        },
        nomad: {
          description: [
            'Click_DescrGlobal_MeServices',
            { eventCategory: 'OffreGlobalNomads', eventLabel: 'DescrGlobal_MesServices', eventAction: 'click'},
          ],
          theme: [
            'Click_ThemGlobal_MesServices',
            { eventCategory: 'OffreGlobalNomads', eventLabel: 'ThemGlobal_MesServices', eventAction: 'click'},
          ],
          contact: [
            'Click_ContactezMoiGlobal_MesServices',
            { eventCategory: 'ContactInfo', eventLabel: 'ThemGlobal_MesServices', eventAction: 'click'},
          ],
          cck: [
            'Click_CCK_MesServices',
            { eventCategory: 'OffreGlobalNomads', eventLabel: 'CTACCK_DescrGlobal_MesServices', eventAction: 'click'},
          ],
        },
      },
      banner: {
        contact: [
          'Click_ContactezMoiCurieuxBanner_MesServices',
          { eventCategory: 'ContactInfo', eventLabel: 'BannerCurieux_MesServices', eventAction: 'click'},
        ],
      },
      contact: [
        'Click_ContactezMoiAlorsBanner_MesServices',
        { eventCategory: 'ContactInfo', eventLabel: 'BannerAlors_MesServices', eventAction: 'click'},
      ],
      about: [
        'Click_UnPeuDeMoi_MesServicesHyperlink',
        { eventCategory: 'Coach', eventLabel: 'HyperlinkMesServices', eventAction: 'click'},
      ],
    },
  },
  about: {
    button: {
      cck: [
        'Click_CCK_UnPeuDeMoi',
        { eventCategory: 'OffreGlobalNomads', eventLabel: 'CTACCK_UnPeuDeMoi', eventAction: 'click'},
      ],
      contact: [
        'Click_ContactezMoi_UnPeuDeMoi',
        { eventCategory: 'ContactInfo', eventLabel: 'CTAUnPeuDeMoi', eventAction: 'click'},
      ],
    },
  },
  contact: {
    form: {
      started: [
        'StartedForm_OnSAppelle',
        { eventCategory: 'ContactStarted', eventLabel: 'OnSAppelle', eventAction: 'click'},
      ],
      sent: [
        'SentForm_OnSAppelle',
        { eventCategory: 'ContactSent', eventLabel: 'OnSAppelle', eventAction: 'click'},
      ],
    },
  },
};

export default tags;
