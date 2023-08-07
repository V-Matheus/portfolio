import ScrollSuave from './modules/scroll-suave.js';

const scrollSuave = new ScrollSuave('.header-menu a[href^="#"]');
scrollSuave.init();

import MenuMobile from './modules/menu-mobile.js';

const menuMobile = new MenuMobile('[data-menu="button"]', '.header-links');
menuMobile.init();

import ScrollAnima from './modules/scroll-anima.js';

const scrollAnima = new ScrollAnima("[data-anime='scroll']");
scrollAnima.init();

import HeaderClick from './modules/headerClick.js';

const headerClick = new HeaderClick('.header-links li');
headerClick.init();

import SlideNav from "./modules/slide.js";

const slide = new SlideNav('.slide', '.projetos-slide');
slide.init();
slide.addControl('.custom-controls');
slide.addArrow('.prev', '.next')