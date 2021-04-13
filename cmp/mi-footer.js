class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021 |
      Flores Limón Juan Alfredo | PWA .`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
