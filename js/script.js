import ScrollSuave from './modules/scroll-suave.js';

const scrollSuave = new ScrollSuave('.header-menu a[href^="#"]');
scrollSuave.init();

import MenuMobile from './modules/menu-mobile.js';

const menuMobile = new MenuMobile('[data-menu="button"]', '.header-links');
menuMobile.init();