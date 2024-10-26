export const btnBurger = {
   state: 'off',
};

export function changeOn() {
   btnBurger.state = 'on';
   return btnBurger.state;
}

export function changeOff() {
   btnBurger.state = 'off';
   return btnBurger.state;
}
