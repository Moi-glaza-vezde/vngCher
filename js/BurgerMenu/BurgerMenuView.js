export const elements = {
   btn: document.querySelector('.btn-burger__wrapper'),
   btnString: document.querySelector('.btn-burger__string'),
   nav: document.querySelector('.header__nav'),
   blackWindow: document.querySelector('.black-window'),
   body: document.querySelector('body'),
   navItems: document.querySelectorAll('.nav-item'),
};

export function addActiveBtn(state) {
   if (state == 'on') {
      elements.btnString.classList.toggle('btn-burger__string--active');

      if (elements.btnString.classList.contains('btn-burger__string--active')) {
         elements.nav.classList.add('header__nav--active');
         elements.blackWindow.classList.add('black-window--active');
         elements.body.classList.add('not-scroll');
      } else {
         elements.blackWindow.classList.remove('black-window--active');
         elements.nav.classList.remove('header__nav--active');
         elements.body.classList.remove('not-scroll');
      }
   } else {
      elements.btnString.classList.remove('btn-burger__string--active');
   }
}

export function removeMenu() {
   elements.nav.classList.remove('header__nav--active');
   elements.btnString.classList.remove('btn-burger__string--active');
   elements.body.classList.remove('not-scroll');
   elements.blackWindow.classList.remove('black-window--active');
}
