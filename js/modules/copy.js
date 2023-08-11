export default class Copy {
  constructor(button, copy, input) {
    this.button = document.querySelector(button);
    this.copy = document.querySelector(copy);
    this.input = document.querySelector(input);

    this.button.addEventListener('click', this.buttonCopy.bind(this));
  }

  buttonCopy() {
    const email = this.input.value;

    if (email) {
      navigator.clipboard.writeText(email)
        .then(() => {
          this.copy.classList.add('active');
          setTimeout(() => {
            this.copy.classList.remove('active'); 
          }, 3000);
        })
        .catch((err) => {
          console.error('Erro ao copiar:', err);
        });
    }
  }
}
