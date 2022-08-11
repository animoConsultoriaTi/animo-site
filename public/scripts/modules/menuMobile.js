import handleOutsideClick from './helpers.js';

export default class MenuMobile {
  constructor(button, menu) {
    this.control = document.querySelector(button);
    this.buttons = this.control.querySelectorAll('button');
    this.menu = document.querySelector(menu);
    this.activeClass = 'active';

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.buttons.forEach((item) => {
      item.classList.toggle(this.activeClass);
    });
    this.menu.classList.add(this.activeClass);

    handleOutsideClick(this.menu, () => {
      if (this.buttons[1].classList.contains(this.activeClass)) {
        this.buttons.forEach((item) => {
          item.classList.toggle(this.activeClass);
        });
      }
      this.menu.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.control.addEventListener('click', this.handleClick);
  }

  init() {
    if (this.control && this.menu) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
