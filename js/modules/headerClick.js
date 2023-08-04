export default class HeaderClick {
  constructor(menuHeader) {
   this.menuHeader = document.querySelector(menuHeader)
  } 

  ativaHeader() {
    this.menuHeader.addEventListener('click', () => {
      console.log(this);
    });
  }

  init() {
    ativaHeader();
    return this;
  }
}