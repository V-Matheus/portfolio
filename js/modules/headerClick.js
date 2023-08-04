import ScrollAnima from "./scroll-anima.js";

export default class HeaderClick {
  constructor(menuHeader) {
    this.menuHeader = document.querySelectorAll(menuHeader);
    this.animaChange = this.animaChange.bind(this);
  }
  
  animaChange() {
    this.desativarItens();
    const currentSection = this.anima.getCurrentSection();
    if (currentSection) {
      const sectionId = currentSection.id;
      const menuItem = this.menuHeader.find(item => {
        const link = item.getAttribute('href');
        return link && link === `#${sectionId}`;
      });

      if (menuItem) {
        menuItem.classList.add('ativo');
      }
    }
  }

  // Adiciona a classe 'ativo'
  ativaHeader() {
    this.menuHeader.forEach((item) => {
      item.addEventListener("click", () => {
        this.desativarItens();
        item.classList.add("ativo");
      });
    });
  }

  // Remove a classe 'ativo' de todos os itens
  desativarItens() {
    this.menuHeader.forEach((item) => {
      item.classList.remove("ativo");
    });
  }

  init() {
    this.ativaHeader();
    return this;
  }
}
