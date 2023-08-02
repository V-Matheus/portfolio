import debounce from "./debounce.js";

export default class ScrollAnima {
  constructor(anima) {
    this.anima = document.querySelectorAll(anima);
    this.windowMetade = window.innerHeight * 0.7;

    this.checkDistance = debounce(this.checkDistance.bind(this), 50);
  }

  // Pega a distancia de cada item
  // em relação ao top do site
  getDistance() {
    this.distance = [...this.anima].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      };
    });
  }

  // Verifica a distancia em cada objeto
  // em relação ao scroll do site
  checkDistance() {
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('ativo');
      } else if (item.element.classList.contains('ativo')) {
        item.element.classList.remove('ativo');
      }
    });
  }

  init() {
    if (this.anima.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', this.checkDistance);
    }
    return this;
  }

  // Remove o event de scroll
  stop() {
    window.removeEventListener('scroll', this.checkDistance);
  }
}
