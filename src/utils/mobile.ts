import MobileDetect from 'mobile-detect';

const md = new MobileDetect(global.window ? window.navigator.userAgent : null);

export const isMobile = md.is('mobile');
export const isDesktop = !isMobile;