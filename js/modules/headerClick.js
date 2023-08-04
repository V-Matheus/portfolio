export default class HeaderClick {
  constructor(menuHeader) {
   this.menuHeader = document.querySelectorAll(menuHeader)
  } 

  ativaHeader() {
    this.menuHeader.forEach(item => {
      item.addEventListener('click', () => {
        this.desativarItens();
        item.classList.add('ativo');
      });
    });
  }

  desativarItens() {
    this.menuHeader.forEach(item => {
      item.classList.remove('ativo');
    });
  }

  init() {
    this.ativaHeader();
    return this;
  }
}