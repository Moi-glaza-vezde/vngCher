import * as model from './BurgerMenuModel.js';
import * as view from './BurgerMenuView.js';

view.elements.btn.addEventListener('click', () => {
   const activeBtn = model.changeOn();
   view.addActiveBtn(activeBtn);
});

view.elements.navItems.forEach((item) => {
   item.addEventListener('click', function () {
      const removeActive = model.changeOff();

      view.addActiveBtn(removeActive);
      console.log(555);
      view.removeMenu();
   });
});
